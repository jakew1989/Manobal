import './testimonial.css'
import { motion } from "motion/react"

const Testimonial = () => {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "tween" }}
            viewport={{ once: true }}
            className='wrapper' id='testimonials-wrapper'>
                <div className='text' id='testimonials-info'>
                        <h2>My sessions with Allison really helped me and gave me the tools i needed to deal with my persoanl trauma.</h2>
                        <p>Gill P. Age 46</p>
                </div>
            </motion.div>
        </>
    )
}

export default Testimonial