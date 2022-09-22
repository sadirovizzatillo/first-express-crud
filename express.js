// const express = require("express");
// const Joi = require("joi")
// const app = express();

// app.use(express.json())

// const books = [
//     {
//         id: 1,
//         name: "clock"
//     },
//     {
//         id: 2,
//         name: "rich dad poor dad"
//     },
//     {
//         id: 3,
//         name: "Turkiston qayg\'usi"
//     }
// ]

// app.get("/", (req, res) => {
//     res.send(books)
// })

// app.get("/all/name", (req, res) => {
//     res.send(books)
// })

// app.post("/all/name", (req, res) => {
//     const { error, value, warning } = validateBook(req.body)
//     if (error) {
//         return res.status(400).send(error.details[0].message)
//     }

 
//     const book = {
//         id: books.length + 1,
//         name: req.body.name
//     }
//     books.push(book)

//     res.status(201).send(books)
// })


// app.get("/all/name/:id", (req, res) => {
//     const book = books.find(b => b.id === parseInt(req.params.id))
//     if (book) {
//         res.send(book)
//     } else {
//         res.status(404).send("Berilgan Id ga teng data topilmadi")
//     }
// })


// app.put("/all/name/:id", (req, res) => {
//     const book = books.find(b => b.id === parseInt(req.params.id))

//     if (!book) {
//         return res.status(404).send("Bu id topilmadi")
//     }

//     const { error, value, warning } = validateBook(req.body)
//     if (error) {
//         return res.status(400).send(error.details[0].message)
//     }

//     book.name = req.body.name

//     res.send(book)
// })

// app.delete("/all/name/:id", (req, res) => {
//     const book = books.find(b => b.id === parseInt(req.params.id))
//     if(!book){
//         res.status(404).send("Bu id topilmadi")
//     }

//     const bookIndex = books.indexOf(book)

//     books.splice(bookIndex, 1)

//     res.send(book)
// })


// function validateBook(book){
//     const bookSchema = Joi.object({
//         name: Joi.string().required().min(3)
//     })

//     return bookSchema.validate(book)
// }

// const port = process.env.PORT || 5000
// app.listen(port, () => {
//     console.log(`${port} portni eshityapman aka`)
// })





const express = require("express");
const Joi = require("joi");

const apping = express();

apping.use(express.json())

const categories = [
    {
        id:1,
        name:"Texnologiya"
    },
    {
        id:2,
        name:"Mebellar"
    },
    {
        id:3,
        name:"Mashinalar"
    },
]

apping.get("/api/categories", (req, res) => {
    res.send(categories)
})

apping.get("/api/categories/:id", (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id))

    if(!category){
        res.status(404).send("Bu Id topilmadiku...")
    }

    res.send(category)
})

apping.post("/api/categories/", (req, res) => {
    const categorySchema = Joi.object({
        name: Joi.string().min(5).required()
    })

    const { error, value } = categorySchema.validate(req.body)

    if(error){
        res.status(404).send(error.details[0].message)
    }

    const category = {
        id: categories.length + 1,
        name: req.body.name
    }


    categories.push(category)

    res.status(200).send(categories)
})

apping.put("/api/categories/:id", (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category){
        res.status(404).send("Bu Id topilmadiku...")
    }

    const categoryPutSchema = Joi.object({
        name: Joi.string().required().min(5)
    })

    const { error } = categoryPutSchema.validate(req.body)

    if(error){
        res.send(error.details[0].message)
    }
    category.name = req.body.name

    res.send(category)
})

apping.delete("/api/categories/:id", (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category){
        res.status(404).send("Bu id topilmadiku...")
    }

    const categoryIndex = categories.indexOf(category);

    categories.splice(categoryIndex, 1)

    res.send(categories)

})


const port = process.env.PORT || 5000

apping.listen(port, () =>  console.log(`${port} ni eshityapman...`))