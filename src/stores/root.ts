import axios from 'axios'
import { defineStore } from 'pinia'
import { COCKTAILS_BY_ID, COCKTAILS_BY_INGR_URL, INGRIDIENTS_URL, RANDOM_COCKTAIL } from '../constants';
interface State {
    ingredients: any[]; // Change 'any[]' to the appropriate type for your ingredients
    ingredient: string | null; // Change 'number | string' to the appropriate type for your ingredient
    cocktails: any[]; // Change 'any[]' to the appropriate type for your cocktails
    cocktail:string | null;
  }
export const useRootStore = defineStore('coctails', {
  state: ():State =>( {
    ingredients: [],
    ingredient:null,
    cocktails: [], 
    cocktail:null
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async getIngridients() {
        const data = await axios.get(INGRIDIENTS_URL);
        this.ingredients = data?.data?.drinks;
    },
    async getCocktails(ingredient:string) {
        const data = await axios.get(COCKTAILS_BY_INGR_URL,{
            params:{
                'i':ingredient
            }
        });
        this.cocktails = data?.data?.drinks;
    },
    async getRandomCocktail() {
      const data = await axios.get(RANDOM_COCKTAIL);
      this.cocktail = data?.data?.drinks[0];
      console.log(this.cocktail)
  }
    ,
    async getCocktailByID(id:string) {
      const data = await axios.get(COCKTAILS_BY_ID,{
          params:{
              'i':id
          }
      });
      this.cocktail = data?.data?.drinks[0];
      console.log(this.cocktail)
  }
    ,
    setIngredient(val:string){
        this.ingredient = val;
      }
  },
  
})