import Header from '/src/components/Header'
import Entry from '/src/components/Entry'

export default function App() {
    return (
        <>
            <Header />
            <Entry 
                place='Mount Fuji' 
                country='Japan' 
                date='12 Jan, 2021 - 24 Jan, 2021' 
                description=' Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet) the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
                img='/src/assets/mountain.png' 
                imgAlt='Mount Fuji'
                googleMaps='https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'
            />
            <Entry 
                place='Hawaii' 
                country='USA' 
                date='24 July, 2022 - 28 July, 2022' 
                description='Hawaii is a beautiful tropical island that is known for its prisitine beaches, coconut trees, and welcoming population.'
                img='https://cdn.pixabay.com/photo/2014/11/02/22/58/maui-514578_960_720.jpg' 
                imgAlt='Hawaii Beach.'
                googleMaps='https://maps.app.goo.gl/nrwaqY2utEeSqgMj9'
            />
            <Entry 
                place='Burj Khalifa' 
                country='Dubai' 
                date='8 August, 2023 - 15 August, 2023' 
                description='The Burj Khalifa is the current tallest building in the world. It is one of the greatest feats of engineering.'
                img='https://c1.wallpaperflare.com/preview/346/526/470/u-a-e-dubai-burj-khalifa-architecture.jpg' 
                imgAlt='Burj Khalifa'
                googleMaps='https://maps.app.goo.gl/RTKhmWDDohyLtCok8'
            />
            <Entry 
                place='Petra' 
                country='Jordan' 
                date='12 July, 2024 - 12 July, 2024' 
                description='Petra is one of the seven wonders of the world. Built by an ancient civilizaiton, it continues to attract hundreds of tourists to appreciates its intricate and monumental construction.'
                img='https://c.pxhere.com/photos/cd/2e/treasury_khazne_firaun_al_temple_petra_the_red_the_colorful_siq_jordan-1019834.jpg!d' 
                imgAlt='Petra'
                googleMaps='https://maps.app.goo.gl/PG4ZEgXwsQrGvBbF8'
            />
        </>
    )
}

/*
1. props helps us make components more flexible when we reuse them so that we can use the same structure while using new data.
2. you can pass a prop into a component by creating attributes and then passing a props parameter into the function and calling the attributes using object notation
3. custom props cannot be passed to native DOM elements because there is no definition for them to be used. they can only be used for custom components.
4. you recieve props in a component by adding a parameter which will recieve the props as attributes to an object. then you can call those attributes using braces and object notation
5. props have an object data type

*/