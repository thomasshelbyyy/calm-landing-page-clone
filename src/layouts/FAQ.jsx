import Accordion from "../components/Accordion"

const generalAccordionItems = [
    {
        title: "What is Calm",
        content: "Calm is the #1 mental health app designed to help you manage stress, sleep better, and live a happier, healthier life. Our research-based tools help you build life-changing habits to support your mental health. If you're having trouble falling asleep, our 250+ Sleep Stories®, soundscapes, and guided sleep meditations can lull you to sleep. If you're spiraling in negative thoughts and need immediate relief, our 60-second Breathe Bubble grounds you in the moment and helps your body return to a state of relaxation. If you're overwhelmed at work and need a breather, our stress and burnout specialists can guide you through exercises to help calm your mind. We're here for you whenever or wherever you need us with more content and tools being added monthly."
    },
    {
        title: "What's included in a Calm subscription?",
        content: `A Calm subscription unlocks our full library of meditations, Sleep Stories, music, and other features. The subscription includes
        ~ Multiple original daily offerings from a range of teachers to give your day a dose of wisdom, gratitude and encouragement
        ~ Hours of guided meditations covering sleep, anxiety, stress, gratitude, and much more
        ~ Our entire library of more than 250+ Sleep Stories, with new stories added every week
        ~ Exclusive music tracks for focus, relaxation, and sleep`
    },
    {
        title: "Where should I get started once I download the app?",
        content: `If you have come to Calm to learn relaxation techniques and improve aspects of your mental health, we recommend beginning with the 7 Days of Calm, our introductory program that offers the basics of meditation, and then move on to the 21 Days of Calm. With that foundation, you can explore our library of sessions and programs, which address themes such as anxiety, sleep, focus, and gratitude. Additionally, for moments of acute stress or anxiety, we offer in-the-moment calming exercises via our Panic SOS, Body Scan, and breathing exercise features.

        If you have come to Calm to improve your sleep, we have a collection of over 250 Sleep Stories to help you drift off to restful sleep, ranging from classic literature to nature essays, children's tales, scientific articles, and more. We update our Sleep Stories selection with new options to listen to every week. We also have a collection of soothing Sleep Music.`
    },
    {
        title: "What devices support the Calm app?",
        content: `Calm is available on iOS, Android, Web, in addition to Apple TV, Apple Watch, Amazon Alexa, Google Home, Google WearOS, Samsung Health, Samsung TV and Sonos.`
    },
    {
        title: "How do I cancel?",
        content: `You can cancel your Calm subscription's auto-renewal or free trial at any time.

        To cancel your Calm subscription:
        
        ~ Tap 'Profile' on your app's Home screen.
        ~ Tap the 'Settings' gear icon in the top left corner of your screen.
        ~ Tap 'Manage Subscription' and follow the instructions here to cancel your subscription.
        ~ For subscriptions purchased through Apple and Google Play, tap the word 'here' on your Manage Subscription page to be redirected to your device's subscription settings.`
    }
]

const meditationAccordionItems = [
    {
        title: "What is meditation?",
        content: `Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment. Studies show that a long-term meditation practice can actually help shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing a wide array of benefits* including:

        Decreased anxiety and depression symptoms
        Chronic pain management
        Lower stress levels
        Improved sleep quality`
    },
    {
        title: "What is mindfulness?",
        content: `Mindfulness is a practice that involves intentionally bringing one's attention and awareness to the present moment without judgment. It's about being fully present and engaged in the here and now, rather than dwelling on the past or worrying about the future. Mindfulness encourages a non-judgmental attitude towards one's thoughts, emotions and sensations, allowing them to arise and pass without any added stress. By cultivating mindfulness, people often develop a greater sense of clarity, calmness and overall wellbeing, as well as enhance their ability to respond skillfully to the challenges of life.`
    }
]
const stressAccordionItems = [
    {
        title: "What causes stress and anxiety?",
        content: `Stress and anxiety can have various causes and can differ greatly from person to person. Here are a few common factors that contribute to stress and anxiety:

        Major life changes: Significant life events such as moving, getting married (or divorced), starting a new job or experiencing the loss of a loved one can trigger it.
        Work or school pressure: High workloads, tight deadlines, challenging bosses, or work pressure can lead to stress and anxiety.
        Financial challenges: Job loss, debt, or just struggling to make ends meet can be a significant source of stress and anxiety.
        Relationships: Whether romantic, familial or social, strain or conflict in relationships can cause stress and anxiety.
        Health concerns: Managing chronic illness, physical pain or battling a health condition can be a cause, as well.
        Traumatic experiences: Experiencing a traumatic event, such as an accident, abuse or even a natural disaster can lead to anxiety-related conditions.
        Uncertainty and change: Experiencing frequent change (even positive change!) or feeling uncertain about the future can be a common cause of anxiety.
        It's important to note that not everyone experiences stress and anxiety in the same way. If you're dealing with stress and anxiety, it's recommended to seek support from a mental health professional who can provide personalized guidance.`
    },
    {
        title: "How can I manage my stress and anxiety?",
        content: `Once you're in the Calm app, we recommend using a Breathing Bubble exercise if you're looking for immediate stress or anxiety relief. Breathwork elicits the body's relaxation response which reduces tension and lowers stress.

        We also have other content programs, including our Overcome Stress and Anxiety collection in partnership with clinical psychologist, Dr. Julie Smith. In this series, Dr. Julie guides listeners through high stress moments in real time, including panic attacks, negative thought spirals, and more.
        
        In addition to Dr. Julie's series, you can find more guided breathing exercises and meditations in our Reduce Stress & Anxiety collection. Let experts such as Jay Shetty, Tamara Levitt, and Chibs Okereke help guide you into peaceful mindfulness and relaxation.`
    }
]
const sleepAccordionItems = [
    {
        title: "Why do I have trouble sleeping?",
        content: `There can be various reasons why you may be experiencing trouble sleeping. Here are a few common factors that can contribute to sleep difficulties:

        Stress and Anxiety: High levels of stress or anxiety can make it difficult to relax and fall asleep. Racing thoughts, worry, or an overactive mind can keep you awake at night.
        Poor Sleep Habits: Irregular sleep patterns, inconsistent bedtime routines, excessive caffeine or alcohol consumption, and engaging in stimulating activities before bed can disrupt your sleep.
        Environmental Factors: Uncomfortable sleeping environment, excessive noise, extreme temperatures, or inadequate lighting can interfere with your ability to fall asleep or stay asleep.
        Medical Conditions: Certain medical conditions, such as chronic pain, sleep apnea, restless leg syndrome, or hormonal imbalances, can disrupt your sleep.
        Mental Health Issues: Depression, bipolar disorder, post-traumatic stress disorder (PTSD), and other mental health disorders can affect sleep patterns and quality.
        If you're consistently having trouble sleeping, it's advisable to consult with a healthcare professional who can help assess your specific situation and provide guidance that's tailored to your needs.`
    },
    {
        title: "How can I sleep better naturally?",
        content: `In the Calm app, we recommend starting with our Fall Asleep collection, which features our most popular Sleep Stories®, soundscapes, music, and meditations based on your goals:

        Help falling asleep: natural sleep aids
        Getting back to sleep: reactive tools used to soothe and lull you back to sleep
        Unwinding before bed: proactive tools to help start a sleep routine and focuses on sleep hygiene - this means focusing on building habits and an environment designed for optimal sleep
        Our most popular sleep offering is our Sleep Stories®, which are bedtime stories designed to help you drift off to sleep. Many of our narrators are also names you may already be familiar with, from artists like Harry Styles and Michael Bublé to actors and actresses such as Jennifer Garner and Matthew McConaughey.
        
        With over 200 Sleep Stories® in our library, we have a library fit for both adults and kids, making our app something the whole family can enjoy. Kids can enjoy exclusive Sleep Stories® featuring favorite characters such as Peppa Pig, Minions, Winnie the Pooh, Transformers, and more.
        
        In addition to Sleep Stories®, we also have soothing soundscapes and music that have been sonically-engineered to help you sleep. Choose from nature sounds such as rainstorms and ocean waves, to different frequency pitches including white, brown, and green noise. With over 200 different options and new offerings being added monthly, our Sleep Sounds library has something for everyone—whether you're looking to relax, focus, or fall asleep.
        
        If you're looking for something that provides a bit more guidance, Calm also offers a variety of sleep meditations and breathwork. These exercises help lower the heart rate, which shifts your nervous system out of fight or flight and into a relaxed parasympathetic mode, enabling your body to fall into a deeper sleep.
        
        Lastly, we also have a Sleep Check-In feature which offers a new way to track your sleep. Check in with your nightly sleep quality, and we'll show you patterns to guide you towards better sleep habits and health.`
    },
    {
        title: "Are Sleep Stories® good for kids and adults?",
        content: `Absolutely! In a Calm Science study of 900+ parents (US) who use Calm Kids with their kids at least once a week, parents reported they had lower stress and slept better, and that their kids fell asleep faster and had less stress and anxiety.

        74% felt that Calm Kids helped lower their parenting-stress
        63% felt that Calm Kids helped their own sleep
        95% say Calm Kids Sleep Stories® help their child fall asleep faster
        75% say Calm Kids meditations help their child`
    }
]
const soundscapesAccordionItems = [
    {
        title: "How do different sound frequencies affect your brain?",
        content: `Although it's commonly known now that there are different 'colors' of noises, it might not be known what the difference between them are. Different types of noise have distinct frequency characteristics, which means that the energy of the sound is distributed differently across the frequency spectrum. As a result, how you perceive each noise can affect the use-case of each frequency.

        White noise has equal power in every frequency band, between 20 hertz and 20,000 hertz, and gives your brain something relaxing to focus on; this can help block out distractions and make it perfect for sleep. Similarly, brown noise has more energy at lower frequencies, giving it a deep, 'booming' noise. It is commonly used for relaxation and sleep.
        
        Pink noise has less energy at higher frequencies. Pink noise is often described as having a "fuller" sound compared to white noise. Naturally occurring examples of pink noise are rustling leaves, wind, and heartbeats.
        
        Lastly, it is theorized that green noise is calming because it simulates the spectrum of natural noise without human-made noises; this noise has more energy at mid-range frequencies and is sometimes used in sound masking for tinnitus.`
    },
    {
        title: "How do binaural beats help improve focus and reduce anxiety?",
        content: `Binaural beats are a type of sound therapy that involves playing two different tones in each ear, creating a perceived beat frequency that is thought to affect brain waves. The idea is that when the brain hears two slightly different frequencies, it tries to "reconcile" them by producing a third frequency that is the difference between the two. This is known as the "frequency following response," and it is believed to influence brain waves in a way that can be beneficial for focus and relaxation.

        Some research suggests that listening to binaural beats can help improve focus and reduce anxiety by promoting a state of relaxation and reducing stress levels. One theory is that binaural beats can influence the production of alpha waves in the brain, which are associated with relaxation and reduced anxiety.
        
        Another theory is that binaural beats can help entrain the brain to a specific frequency associated with improved focus or creativity. For example, some studies have suggested that listening to binaural beats in the alpha or theta frequency range can help improve cognitive performance and enhance creativity.
        
        However, while some research has shown potential benefits of binaural beats for certain conditions, such as anxiety and depression, the evidence is not yet conclusive.`
    }
]

const FAQ = () => {
    return (
        <div className="p-12">
            <h1 className="text-center text-4xl font-bold text-sky-800">Frequently Asked Questions</h1>
            <Accordion
                title="General"
                items={generalAccordionItems}
            />
            <Accordion
                title="MEDITATION & MINDFULNESS"
                items={meditationAccordionItems}
            />
            <Accordion
                title="STRESS & ANXIETY"
                items={stressAccordionItems}
            />
            <Accordion
                title="SLEEP"
                items={sleepAccordionItems}
            />
            <Accordion
                title="SOUNDSCAPES"
                items={soundscapesAccordionItems}
            />
        </div>
    )
}


export default FAQ