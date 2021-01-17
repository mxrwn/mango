const puppeteer = require('puppeteer')
const $ = require('cheerio')
const Manga = require('./../models/Manga')
const Category = require('./../models/Category')
const {v4: uuidv4 } = require('uuid')
const _ = require('lodash')
const GetMangasFromScanTrad = async() => {

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://scantrad.net/mangas')
  const content = await page.evaluate(() => {
    let mangasArray = []
    let mangas = document.querySelectorAll('.h-left .home-manga')
    mangas.forEach(manga => {
      mangasArray.push(manga.innerHTML)
    })
    
    return mangasArray
  })
  const result = []
  categoryArray = [];
  content.forEach(manga => {
    
    let categoryObj = {
      type : $('.hm-right .hmr-date', manga).text(),
    }
    categoryArray.push(categoryObj)
    categoryArray = _.uniqBy(categoryArray, 'type')
   console.log(categoryArray);
     let total = $('.hm-left .hm-info .hmi-sub', manga).text()
     total = Number(total.substring(total.lastIndexOf(' ') + 1))
    let obj = {
      title : $('.hm-left .hm-info .hmi-titre', manga).text(),
      image : $('.hm-left .hm-image img', manga).attr('src'),
      url : `https://scantrad.net${$(this, manga).attr('href')}`,
      total,
      scantrad : true,
      category: categoryObj.type
    }
    result.push(obj)
  })
  categoryArray.forEach(category => {
    Category.find({type : category.type}, (err , doc) => {
      if(doc === null || doc.length == 0){
        
        let categorydoc = new Category(category)
        categorydoc.save()
      }else{
        Category.updateOne({type: category.type}, category)
      }
    })
  })
  result.forEach(manga => {
    Manga.find({title: manga.title, image: manga.image}, (err , doc) => {
      if(doc === null || doc.length == 0){
        
        let mangadoc = new Manga(manga)
        mangadoc.save()
      }else{
        Manga.updateOne({title: manga.title, image: manga.image}, manga)
      }
    })
    
  })
  return 200
}

module.exports = {
  GetMangasFromScanTrad
}