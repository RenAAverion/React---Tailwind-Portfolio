import ContactForm from "../modular/ContactForm"
import Socials from "../modular/Socials"

const email = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

const link = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>



export default function Contact (){
   return( 
   <section id="contact" className="font-stm md:flex md:flex-col p-5 md:p-10 bg-black ">
        <h4 className="font-stm text-2xl text-center md:text-3xl text-white">Contact Me</h4>
        <hr className="block border-dashed my-2 bg-white" />
        <div className="md:flex md:p-8">
            <div className="p-2 bg-white rounded-md md:p-5 md:flex-1">
                <h4 className="font-stm  text-xl mb-3 flex  justify-center items-center md:justify-start gap-2">{link} Socials</h4>
                <div>
                    <Socials />
                </div>
            </div>
            <div className="p-2 text-white md:p-5 md:flex-1">
                <h4 className="font-stm  text-xl mb-3 flex  justify-center items-center md:justify-start gap-2">{email} Email</h4>
                    <ContactForm/>
            </div>
        </div>
    </section>
    )
}
