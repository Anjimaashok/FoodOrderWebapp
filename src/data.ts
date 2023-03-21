import { Foods } from "./app/shared/models/food";

export const sample_foods: Foods[]=[
    {
        id: 1,
        name:'Pizza pepparoni',
        cookTime:'10-20',
        price:40,
        favorite:false,
        origins:['Italy'],
        star:3,
        imageUrl:'/assets/pizza.jpg',
        tags:['FastFood','Pizza','Lunch']
        
      },
      {
        id: 2,
        name:'Biriyani',
        cookTime:'10',
        price:120,
        favorite:true,
        origins:['Kerala'],
        star:4.5,
        imageUrl:'/assets/biriyani.jpg',
        tags:['Homefood','Biriyani','Lunch']
      },
      {
        id: 3,
        name:'MeetBalls',
        cookTime:'10-20',
        price:60,
        favorite:false,
        origins:['US'],
        star:1,
        imageUrl:'/assets/meetball.jpg',
        tags:['Fastfood','Meetballs','Lunch']
      },
      {
        id: 4,
        name:'Alpham',
        cookTime:'10-15',
        price:100,
        favorite:true,
        origins:['Arebia'],
        star:2.9,
        imageUrl:'/assets/alpham.jpg',
        tags:['Fastfood','Alpham','Lunch']
      },
      {
        id: 5,
        name:'Brosted',
        cookTime:'15-20',
        price:160,
        favorite:true,
        origins:['US'],
        star:4.8,
        imageUrl:'/assets/brosted.jpg',
        tags:['Fastfood','Brosted','snaks']
      },
      {
        id: 6,
        name:'Burger',
        cookTime:'10-15',
        price:70,
        favorite:false,
        origins:['US'],
        star:3,
        imageUrl:'/assets/burger.jpeg',
        tags:['Fastfood','Burger','Lunch']
      },
      {
        id: 7,
        name:'Chiken Soup',
        cookTime:'17-25',
        price:55,
        favorite:false,
        origins:['Italy'],
        star:2,
        imageUrl:'/assets/soup.jpg',
        tags:['Fastfood','Soup','starter']
      },
      {
        id: 8,
        name:'Porota',
        cookTime:'10-15',
        price:10,
        favorite:true,
        origins:['Kerala'],
        star:4.8,
        imageUrl:'/assets/porota.jpg',
        tags:['Fastfood','Porota','Lunch']
      },
]