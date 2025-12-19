#!/bin/bash
#
# Validate all SKILL.md files in the skills/ directory
# Checks for required YAML frontmatter fields and basic structure
#

SKILLS_DIR="$(dirname "$0")/../skills"
ERRORS=0
SKILLS_FOUND=0

echo "Validating skills in $SKILLS_DIR"
echo "================================"
echo ""

# Find all SKILL.md files
for skill_dir in "$SKILLS_DIR"/*/; do
    skill_file="$skill_dir/SKILL.md"

    if [[ -f "$skill_file" ]]; then
        SKILLS_FOUND=$((SKILLS_FOUND + 1))
        skill_name=$(basename "$skill_dir")
        echo "Checking: $skill_name"

        # Check for YAML frontmatter start
        first_line=$(head -1 "$skill_file")
        if [[ "$first_line" != "---" ]]; then
            echo "  ✗ Missing YAML frontmatter start (---)"
            ERRORS=$((ERRORS + 1))
            continue
        fi

        # Check for name field
        if ! grep -q "^name:" "$skill_file"; then
            echo "  ✗ Missing required field: name"
            ERRORS=$((ERRORS + 1))
        else
            name=$(grep "^name:" "$skill_file" | head -1 | sed 's/^name:[[:space:]]*//')

            # Validate name format (lowercase alphanumeric with hyphens)
            if ! echo "$name" | grep -qE "^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$"; then
                echo "  ✗ Invalid name format: '$name'"
                ERRORS=$((ERRORS + 1))
            fi

            # Check name length (1-64 chars)
            name_len=${#name}
            if [[ $name_len -gt 64 ]]; then
                echo "  ✗ Name too long: $name_len chars (max 64)"
                ERRORS=$((ERRORS + 1))
            fi
        fi

        # Check for description field
        if ! grep -q "^description:" "$skill_file"; then
            echo "  ✗ Missing required field: description"
            ERRORS=$((ERRORS + 1))
        fi

        # Check for markdown heading
        if ! grep -q "^# " "$skill_file"; then
            echo "  ✗ Missing main heading (# Title)"
            ERRORS=$((ERRORS + 1))
        fi

        # Check content length (should have substantial content)
        line_count=$(wc -l < "$skill_file")
        if [[ $line_count -lt 20 ]]; then
            echo "  ⚠ Warning: Very little content ($line_count lines)"
        fi

        echo "  ✓ Validated"
    fi
done

echo ""
echo "================================"
echo "Skills found: $SKILLS_FOUND"
echo "Errors: $ERRORS"

if [[ $ERRORS -gt 0 ]]; then
    echo ""
    echo "Validation FAILED"
    exit 1
else
    echo ""
    echo "All skills validated successfully!"
    exit 0
fi
