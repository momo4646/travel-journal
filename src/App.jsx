import Header from '/src/components/Header'
import Entry from '/src/components/Entry'
import entries from '/src/data'

export default function App() {
    const entryElements = entries.map(entry => (
        <Entry 
            place={entry.place}
            country={entry.country}
            date={entry.date}
            description={entry.description}
            img={entry.img}
            googleMaps={entry.googleMaps}
        />
    ))
    return (
        <>
            <Header />
            {entryElements}
       </>
    )
}

{/*
1. props helps us make components more flexible when we reuse them so that we can use the same structure while using new data.
2. you can pass a prop into a component by creating attributes and then passing a props parameter into the function and calling the attributes using object notation
3. custom props cannot be passed to native DOM elements because there is no definition for them to be used. they can only be used for custom components.
4. you recieve props in a component by adding a parameter which will recieve the props as attributes to an object. then you can call those attributes using braces and object notation
5. props have an object data type

*/}