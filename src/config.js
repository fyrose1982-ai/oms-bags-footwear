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
