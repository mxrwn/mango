const puppeteer = require('puppeteer')
const $ = require('cheerio')
const Manga = require('./../models/Manga')
const {v5} = require('uuid')
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
  content.forEach(manga => {
    console.log(manga)
     let total = $('.hm-left .hm-info .hmi-sub', manga).text()
     total = Number(total.substring(total.lastIndexOf(' ') + 1))
    let obj = {
      title : $('.hm-left .hm-info .hmi-titre', manga).text(),
      image : $('.hm-left .hm-image img', manga).attr('src'),
      url : `https://scantrad.net${$(this, manga).attr('href')}`,
      total,
      scantrad : true
    }
    result.push(obj)
  })
  result.forEach(manga => {
    Manga.find({title: manga.title, image: manga.image}, (err , doc) => {
      if(doc === null || doc.length === 0){
        let mangadoc = new Manga(manga)
        mangadoc.save()
      }else{
        Manga.updateOne({title: manga.title, image: manga.image}, manga, (err, docu) => {
        })
      }
    })
    
  })
}

module.exports = {
  GetMangasFromScanTrad
}