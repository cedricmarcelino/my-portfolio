import linkedinlogo from  '../icons/linkedin.png'
import upworklogo from  '../icons/upworklogo.png'

function Contact() {
    return (
        <div className="text-center bg-fresh text-vermillion pt-2 pb-2" id="contact">
            <p className="p-2">
                <span className="text-3xl font-semibold">Interested?</span>
                <br></br>
                Let's have a chat.
            </p>

            <div className="flex justify-around p-2"> 
            <a href="mailto:cedricmarcelino1105@gmail.com"><i className="cursor-pointer fas fa-envelope text-6xl"></i></a>
            <a className="hidden lg:block"href="https://www.upwork.com/freelancers/~010b93fdc7c79ebfe4" target="_blank"><img className="cursor-pointer h-14" src={upworklogo} /></a> 
            <a href="https://www.linkedin.com/in/cedric-marcelino-882966199/" target="_blank"><img className="cursor-pointer h-14" src={linkedinlogo} /></a> 
            </div>
            
            <div className="flex flex-col p-2 lg:hidden">
                <div className="flex justify-around">
                   <a href="https://www.upwork.com/freelancers/~010b93fdc7c79ebfe4" target="_blank"><img className="cursor-pointer h-14" src={upworklogo} /></a> 
                </div>
            </div>

        </div>
    )
}

export default Contact
