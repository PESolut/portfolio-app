import {Header} from './components/'
import PageBlock from './pageComps/PageBlock'
import PageFooter from './pageComps/PageFooter'
import PageHeader from './pageComps/PageHeader'
import PageWrapper from './pageComps/PageBlock'
import './App.css'


function App() {
  return (
    <>
    
    <PageHeader/>

    <PageBlock id='block-1' label='About'>

    </PageBlock>

    <PageBlock id='block-2' label='Resume'>

    </PageBlock>

    <PageBlock id='block-3' label='Portfolio'>

    </PageBlock>

    <PageBlock id='block-4' label='Contact'>

    </PageBlock>

    <PageFooter/>

    </>
  );
}

export default App;