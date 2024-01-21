// ======EMAIL JS
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_b79pogn', 'template_eyb6umm', '#contact-form', '83M_TMRdNqAbUXrkt')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message Sent Successfully !'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message Not Sent !'
        })
}

contactForm.addEventListener('submit', sendEmail)