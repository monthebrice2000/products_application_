import { createApp } from 'vue'
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App";
import AddFormProduct from "@/components/products/AddFormProduct";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import HomePage from "@/components/HomePage";
import ViewProduct from "@/components/products/ViewProduct";
import UpdateFormProduct from "@/components/products/UpdateFormProduct";
import UserAuth from "@/components/users/UserAuth";

const app = createApp(App);
const store = createStore({
    state(){
        return {
            products: [
                {
                    id: 6,
                    name: 'Cold Ice-cream',
                    min_price: 5,
                    max_price: 20,
                    image_url: '../assets/images/p-6.jpg',
                    description: 'description',
                    numbers_stars: 4,
                },
            ]
        }
    },
    getters:{
        getProduct(state){
            return state.products;
        },
    },
    mutations: {
        addProducts(state, payload ){
            state.products.push( ...payload.products );
        },
        setStar(state, payload){
            const product = state.products.find( product => product.id === payload.value )
            product.numbers_stars = product.numbers_stars + payload.parameter;
            console.log( state.products )
        },
        async loadProducts( state, payload){
            state.products = payload.products;
        },
    },
    actions:{
        addProducts(context, payload ){
            context.commit( 'addProducts', payload );
        },
        setStar(context, payload){
            context.commit( 'setStar', payload );
        },
        async loadProducts(context){
            const response = await fetch('https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/products.json', {
                method: 'GET'
            });

            const responseData = await response.json();
            if( !response.ok ){
                const errorLoadProduct = new Error( responseData.message || 'Failed To Load Product');
                throw errorLoadProduct;
            }
             const products = [];
            //console.log( responseData );
            for ( const id in responseData ){
                products.push( { id: id, ...responseData[id] } );
            }
            context.commit('loadProducts', {
                products: products,
            })
        },
        async addProduct(context, payload){
            const response = await fetch('https://vuejs-backend-c42b8-default-rtdb.firebaseio.com/products.json', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name: payload.product_name,
                    description: payload.description,
                    min_price: payload.min_price,
                    max_price: payload.max_price,
                    image_url: payload.image_url,
                    numbers_star: 0
                })
            });

            const responseData = await response.json();
            if( !response.ok ){
                const errorAddProduct = new Error( responseData.message || 'Failed To Create Product');
                throw errorAddProduct;
            }
            //console.log( responseData );
            // context.commit('addProduct', {
            //     products: responseData.products,
            // })
            //console.log( responseData );
            //console.log( context );
        }
    }
})
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/login', component: UserAuth },
        { path: '/products', components: { header: Header, default: HomePage, footer: Footer } },
        { path: '/add-product', component: AddFormProduct },
        { path: '/view-product/:id', component: ViewProduct },
        { path: '/view-product/update-product/:id', component: UpdateFormProduct },
        { path: '/:notFound(.*)', redirect: '/products' }
    ]
})
app.use(store);
app.use( router );
app.mount('#app');

