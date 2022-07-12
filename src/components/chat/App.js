import './App.css';
import Image from "../../resources/pic1.jpg"


function App(props) {
    const {currentContact} = props
    console.log(currentContact);
    return (
        
        <>
            <section className="section-box">
                {
                    currentContact == null ? <div className='before'>No data</div>
                    : <div>
                          {currentContact.names}
                      </div>
                

                }
            </section>
        </>
    )
}

export default App;