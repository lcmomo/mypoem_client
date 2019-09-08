export const RouteConfig=[
    {
        path:"/",
        component:()=>(
            import("../IndexPage.js")
        ),
        model:[],
        routes:[
            {
                path:"/category",
                component:()=>(
                    import("../category/Category.js")
                ),
                model:[import('../../models/category.js')]
            }
        ]
    }
]

// function RouterConfig({history,app}){
//     const IndexPage=dynamic({
//         app,
//         models:()=>[import('./models/IndexPage'),],
//         component: () => import('./routes/IndexPage')
//     })

//     const Category = dynamic({
//         app,
//         models:()=>[import('./models/IndexPage'),]
//         component: () => import('./routes/Category')
//     })
// }