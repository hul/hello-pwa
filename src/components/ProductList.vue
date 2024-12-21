<!-- src/components/ProductList.vue -->
<template>
    <div>
      <h2>Lista Produktów (Offline-Ready)</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.nazwa }} - {{ product.cena }} PLN
        </li>
      </ul>
      <button @click="addRandomProduct">Dodaj losowy produkt</button>
    </div>
  </template>
  
  <script>
  import { db } from '../db/index.js'
  
  export default {
    name: 'ProductList',
    data() {
      return {
        products: []
      }
    },
    async created() {
      this.products = await db.produkty.toArray()
    },
    methods: {
      async addRandomProduct() {
        await db.produkty.add({
          nazwa: 'Produkt ' + Date.now(),
          cena: (Math.random() * 10).toFixed(2)
        })
        this.products = await db.produkty.toArray()
      }
    }
  }
  </script>
  