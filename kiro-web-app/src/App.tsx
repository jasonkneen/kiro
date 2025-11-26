import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Methodology from './pages/Methodology'
import Process from './pages/Process'
import AIReasoning from './pages/AIReasoning'
import Prompting from './pages/Prompting'
import Execution from './pages/Execution'
import Resources from './pages/Resources'
import Examples from './pages/Examples'
import Templates from './pages/Templates'
import SystemDocs from './pages/SystemDocs'
import SteeringDocs from './pages/SteeringDocs'
import Commands from './pages/Commands'
import ValidationReport from './pages/ValidationReport'
import Navigation from './pages/Navigation'
import ContentCoverage from './pages/ContentCoverage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/process" element={<Process />} />
          <Route path="/ai-reasoning" element={<AIReasoning />} />
          <Route path="/prompting" element={<Prompting />} />
          <Route path="/execution" element={<Execution />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/system-docs" element={<SystemDocs />} />
          <Route path="/steering-docs" element={<SteeringDocs />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/validation-report" element={<ValidationReport />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/content-coverage" element={<ContentCoverage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 