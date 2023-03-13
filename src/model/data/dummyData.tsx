import { Category } from "../classes/Category";
import { Hobby } from "../classes/Hobby";

export const Categories = [
    new Category('1','Deportes','#0085C7'),
    new Category('2','Video juegos','#0039C7'),
    new Category('3','Comidas','#C71800'),
    new Category('4','Idiomas','#00C706'),
    new Category('4','Juegos de mesa','#F7DC6F')
];

export const Hobbies = [
    new Hobby('1',['1','2'],'Halo 6',
    'https://data.1freewallpapers.com/download/halo-noble-6-1400x1050.jpg',
    ['Concentracion']),
    
    new Hobby('2',['1','2'],'Correr para que nome deje el autobus',
    'https://correnl.com/wp-content/uploads/2020/06/run-1024x720.jpg',
    ['Concentracion','Condicion'])
    
];