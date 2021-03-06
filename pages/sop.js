import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const showdown  = require('showdown');
const fs  = require("fs");

const sop = (props) =>{
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center ">
            <div className="w-2/4 parsedown">
                <div dangerouslySetInnerHTML={{ __html:props.body}}/> 
            </div>
        </div>
        <Footer />
        </>
    )
}
export async function getStaticProps(){
    let content = fs.readFileSync('./_posts/sop.md','utf8');
    let converter = new showdown.Converter();
    let html = converter.makeHtml(content);

    return {
       props : {body:html}
    }
}
export default sop