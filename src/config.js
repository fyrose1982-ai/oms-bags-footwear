export const BUSINESS = {
  name: 'O.M.S Bags & Footwear',
  phoneDisplay: '9884609304',
  tel: 'tel:+919884609304',
  whatsapp: 'https://wa.me/919884609304',
  address: ['W59C+MGH, Anna Street,', 'Santhosapuram, Vengavasal,', 'Tambaram, Tamil Nadu – 600073, India.'],
  directions: 'https://www.google.com/maps/dir/?api=1&destination=W59C%2BMGH%2C+Anna+Street%2C+Santhosapuram%2C+Tambaram%2C+Tamil+Nadu+600073',
  mapEmbed: 'https://www.google.com/maps?q=W59C%2BMGH%2C+Anna+Street%2C+Santhosapuram%2C+Tambaram%2C+Tamil+Nadu+600073&output=embed'
}
import everyday from './assets/everyday-slip-on-sports-shoe-tambaram.webp'
import casual from './assets/casual-sports-shoe-tambaram.webp'
import formal from './assets/formal-style-mens-sandal-tambaram.webp'
import ladies from './assets/ladies-sandal-footwear-tambaram.webp'
import sports from './assets/sports-shoe-footwear-tambaram.webp'
import slipon from './assets/slip-on-shoe-footwear-tambaram.webp'
import clogs from './assets/kids-clogs-footwear-tambaram.webp'
export const MORE = [
  { t: "Ladies' Sandals", img: ladies, alt: 'Ladies peach double-strap sandal available in Tambaram' },
  { t: 'Sports Shoes', img: sports, alt: 'Blue lace-up sports shoe at O.M.S Bags & Footwear, Tambaram' },
  { t: 'Slip-on Shoes', img: slipon, alt: 'Navy slip-on shoe with white sole, Tambaram' },
  { t: "Kids' Clogs", img: clogs, alt: 'Kids beige and brown clogs with headphone charm, Tambaram' }
]
// Add your own shop photos (WebP) to src/assets/ and set `img` to import them, e.g.
// import shoes from './assets/everyday-footwear-tambaram.webp'
export const FOOTWEAR = [
  { t: 'Everyday Footwear', d: 'Comfortable pairs for daily wear.', img: everyday },
  { t: 'Casual Footwear', d: 'Relaxed styles for outings and weekends.', img: casual },
  { t: 'Formal Footwear', d: 'Polished options for work and occasions.', img: formal }
]
export const BAGS = [
  { t: 'School Bags', d: 'Carry books and essentials to class.' },
  { t: 'Travel Bags', d: 'Bags for trips, short and long.' },
  { t: 'Everyday Bags', d: 'Practical carriers for daily errands.' },
  { t: 'Backpacks', d: 'Comfortable backpacks for study and work.' }
]
export const REPAIRS = ['Bag Repair', 'Luggage Repair', 'Leather Item Maintenance']

// ---- Bag photo galleries ----
// To add a bag: drop a WebP into src/assets/bags/ and add one line below (file = file name without .webp).
const bagFiles = import.meta.glob('./assets/bags/*.webp', { eager: true, query: '?url', import: 'default' })
const bagImg = f => bagFiles[`./assets/bags/${f}.webp`]
const mk = (file, t, alt) => ({ t, img: bagImg(file), alt: alt || `${t} at O.M.S Bags & Footwear, Tambaram` })
export const SCHOOL_BAGS = [
  mk('tycoon-blue-school-bag-tambaram', 'Tycoon School Bag', 'Blue and black Tycoon school bag with multiple zip pockets, Tambaram'),
  mk('nike-blue-backpack-tambaram', 'Blue Sports Backpack', 'Blue and black sports backpack with top handle, Tambaram'),
  mk('black-orange-backpack-tambaram', 'Black & Orange Backpack', 'Large black backpack with orange zips and side buckles, Tambaram'),
  mk('naruto-print-school-bag-tambaram', 'Naruto Print School Bag', 'Black school bag with Naruto anime print, Tambaram'),
  mk('one-piece-print-school-bag-tambaram', 'One Piece Print School Bag', 'Black school bag with One Piece anime print, Tambaram')
]
export const KIDS_BAGS = [
  mk('kids-plush-spiderman-backpack-tambaram', 'Spiderman Kids Bag', 'Red and blue plush Spiderman kids backpack, Tambaram'),
  mk('kids-plush-superman-backpack-tambaram', 'Superman Kids Bag', 'Blue plush Superman kids backpack, Tambaram'),
  mk('kids-plush-batman-backpack-tambaram', 'Batman Kids Bag', 'Grey and yellow plush Batman kids backpack, Tambaram'),
  mk('kids-plush-ironman-backpack-tambaram', 'Ironman Kids Bag', 'Red plush Ironman kids backpack, Tambaram'),
  mk('kids-plush-captain-america-backpack-tambaram', 'Captain America Kids Bag', 'Blue plush Captain America shield kids backpack, Tambaram'),
  mk('kids-plush-pikachu-backpack-tambaram', 'Pikachu Kids Bag', 'Yellow plush Pikachu kids backpack, Tambaram'),
  mk('kids-plush-doraemon-backpack-tambaram', 'Doraemon Kids Bag', 'Light blue plush Doraemon kids backpack, Tambaram'),
  mk('kids-plush-jojo-backpack-tambaram', 'JoJo Kids Bag', 'Blue plush JoJo kids backpack, Tambaram'),
  mk('kids-plush-luigi-backpack-tambaram', 'Luigi Kids Bag', 'Green plush Luigi kids backpack, Tambaram'),
  mk('kids-plush-peppa-backpack-tambaram', 'Peppa Kids Bag', 'Pink plush Peppa pig kids backpack, Tambaram'),
  mk('kids-plush-minnie-backpack-tambaram', 'Minnie Kids Bag', 'Pink plush Minnie kids backpack, Tambaram'),
  mk('kids-plush-barbie-backpack-tambaram', 'Barbie Kids Bag', 'Pink plush Barbie kids backpack, Tambaram'),
  mk('kids-plush-blue-baby-shark-backpack-tambaram', 'Baby Shark Kids Bag (Blue)', 'Blue plush Baby Shark kids backpack, Tambaram'),
  mk('kids-plush-yellow-baby-shark-backpack-tambaram', 'Baby Shark Kids Bag (Yellow)', 'Yellow plush Baby Shark kids backpack, Tambaram')
]
