<template>
  <div class="fiyy">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        @click="LiBtn(index,item)"
        :class="{active:index == nowIndex}"
      >{{item.name}}</li>
    </ul>
    <div class="fiyy-right">
      <Temp :date="date"></Temp>
    </div>
  </div>
</template>
<script>
// import FiyImg from "./fiyImg"
import Temp from "./temp";
export default {
  components: {
    // FiyImg,
    Temp
  },
  // computed: {
  //       get:function(){
  //         return this.date.push(this.list[0])
  //       }
  //     },
  data() {
    return {
      date: [],
      list: [
        {
          name: "新品",
          imgOne:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/7ALVqa3IxdFFtbjq9jJY.jpg",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/j4TbJAMWn9Guo3azGNSc.jpg",
          minImgOne:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/4BypjqT2vl73hGpyNDSe.png",
          minImgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/tz59lQfBTJhOFzPBnJzT.png",
          minImgThree:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/LiUP5PWupx2zr71l73Vj.png",
          minImgFour:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/f9izYS4lPGwuwlYURu8M.png",
          minImgFive:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/0GVOeFmRKIANQvkt9dUs.png",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353224/428_428_BBB155FB6C09744712785FB380EA616E967F4F8F8CAEC76Amp.png",
              text1: "HUAWEI Mate 30 Pro 5G",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
                text1: "荣耀V30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353477/428_428_87A0D607385DCA7FD02C11828E0C52D3FC77CEFC0E313D74mp.png",
                text1: "HUAWEI Mate 30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀V30 Pro 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443359561/428_428_DBB69C4C46D404887E3183DBF1C14AEF4F968600C87EBFF4mp.png",
                text1: "HUAWEI nova 6 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png",
                text1: "HUAWEI nova 5z"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/a4ElBaXb2Fua7u5AvDsD.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20S"
            },
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "华为手机",
          imgOne:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/7ALVqa3IxdFFtbjq9jJY.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353224/428_428_BBB155FB6C09744712785FB380EA616E967F4F8F8CAEC76Amp.png",
              text1: "HUAWEI Mate 30 Pro 5G",
              kind:"HUAWEI Mate系列"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
                text1: "荣耀V30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353477/428_428_87A0D607385DCA7FD02C11828E0C52D3FC77CEFC0E313D74mp.png",
                text1: "HUAWEI Mate 30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀V30 Pro 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443359561/428_428_DBB69C4C46D404887E3183DBF1C14AEF4F968600C87EBFF4mp.png",
                text1: "HUAWEI nova 6 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png",
                text1: "HUAWEI nova 5z"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/a4ElBaXb2Fua7u5AvDsD.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20S"
            },
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "荣耀手机",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/j4TbJAMWn9Guo3azGNSc.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
              text1: "荣耀V30 5G",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443352555/428_428_5B02682D327402A4774F83804F79043939BAE5C612C15A6Emp.png",
                text1: "荣耀20青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀20S"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443333400/428_428_0D93336CF739556518B21928F923889A4786B2CD816BEB25mp.png",
                text1: "荣耀Play3"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png",
                text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443304349/428_428_1558245073712mp.png",
                text1: "荣耀20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320394/428_428_1563504284133mp.png",
                text1: "荣耀9X PRO"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443315338/428_428_1559306427457mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20i"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443280995/428_428_1545877507789mp.png",
                text1: "荣耀V20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443269778/428_428_1540951264378mp.png",
                text1: "荣耀Magic2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443261482/428_428_1550885454087mp.png",
                text1: "荣耀8X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443273959/428_428_1555729935843mp.png",
                text1: "荣耀10青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png",
                text1: "荣耀Note10"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443258574/428_428_1550885810815mp.png",
                text1: "荣耀8X Max"
            }
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "笔记本&平板",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/cbexic8gDfVWkzadYnLY.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443358489/428_428_81ADC4941CB944156FE13922B7381108E7958F06A63A0A05mp.png",
              text1: "MagicBook 15",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443297726/428_428_1555752034219mp.png",
                text1: "HUAWEI MateBook X Pro 2019款"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443333554/428_428_425567487650BEF6BE73040F24E41C61D219680D0D80FDF7mp.png",
                text1: "MagicBook 科技尝鲜版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443292448/428_428_1556004770031mp.png",
                text1: "HUAWEI MateBook 14"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443297771/428_428_1555904746689mp.png",
                text1: "HUAWEI MateBook E 2019款"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443344949/428_428_1EB86162660FD51C6430A395BC0441BE2E327990E0343DCFmp.png",
                text1: "HUAWEI nova 5z"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/a4ElBaXb2Fua7u5AvDsD.png",
                text1: "MagicBook Pro 科技尝鲜版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443300914/428_428_1556179920783mp.png"
                ,text1: "HUAWEI MateBook 13"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443209439/428_428_1542768417288mp.png",
                text1: "HUAWEI MateBook D"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443313112/428_428_1563869539329mp.png",
                text1: "MagicBook Pro"
            },{
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443179152/428_428_1539767984482mp.png",
                text1: "HUAWEI MateBook D"
            },{
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443209439/428_428_1542768417288mp.png",
                text1: "HUAWEI MateBook E 12英寸"
            }
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "智能穿戴&VR",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353224/428_428_BBB155FB6C09744712785FB380EA616E967F4F8F8CAEC76Amp.png",
              text1: "HUAWEI Mate 30 Pro 5G",
              kind:"HUAWEI Mate系列"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
                text1: "荣耀V30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353477/428_428_87A0D607385DCA7FD02C11828E0C52D3FC77CEFC0E313D74mp.png",
                text1: "HUAWEI Mate 30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀V30 Pro 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443359561/428_428_DBB69C4C46D404887E3183DBF1C14AEF4F968600C87EBFF4mp.png",
                text1: "HUAWEI nova 6 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png",
                text1: "HUAWEI nova 5z"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/a4ElBaXb2Fua7u5AvDsD.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20S"
            },
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "智能家居",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/j4TbJAMWn9Guo3azGNSc.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
              text1: "荣耀V30 5G",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443352555/428_428_5B02682D327402A4774F83804F79043939BAE5C612C15A6Emp.png",
                text1: "荣耀20青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀20S"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443333400/428_428_0D93336CF739556518B21928F923889A4786B2CD816BEB25mp.png",
                text1: "荣耀Play3"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png",
                text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443304349/428_428_1558245073712mp.png",
                text1: "荣耀20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320394/428_428_1563504284133mp.png",
                text1: "荣耀9X PRO"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443315338/428_428_1559306427457mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20i"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443280995/428_428_1545877507789mp.png",
                text1: "荣耀V20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443269778/428_428_1540951264378mp.png",
                text1: "荣耀Magic2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443261482/428_428_1550885454087mp.png",
                text1: "荣耀8X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443273959/428_428_1555729935843mp.png",
                text1: "荣耀10青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png",
                text1: "荣耀Note10"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443258574/428_428_1550885810815mp.png",
                text1: "荣耀8X Max"
            }
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
          
        },
        {
          name: "智慧屏",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353224/428_428_BBB155FB6C09744712785FB380EA616E967F4F8F8CAEC76Amp.png",
              text1: "HUAWEI Mate 30 Pro 5G",
              kind:"HUAWEI Mate系列"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
                text1: "荣耀V30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353477/428_428_87A0D607385DCA7FD02C11828E0C52D3FC77CEFC0E313D74mp.png",
                text1: "HUAWEI Mate 30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀V30 Pro 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443359561/428_428_DBB69C4C46D404887E3183DBF1C14AEF4F968600C87EBFF4mp.png",
                text1: "HUAWEI nova 6 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png",
                text1: "HUAWEI nova 5z"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/a4ElBaXb2Fua7u5AvDsD.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20S"
            },
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "耳机音箱",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/j4TbJAMWn9Guo3azGNSc.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
              text1: "荣耀V30 5G",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443352555/428_428_5B02682D327402A4774F83804F79043939BAE5C612C15A6Emp.png",
                text1: "荣耀20青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀20S"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443333400/428_428_0D93336CF739556518B21928F923889A4786B2CD816BEB25mp.png",
                text1: "荣耀Play3"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png",
                text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443304349/428_428_1558245073712mp.png",
                text1: "荣耀20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320394/428_428_1563504284133mp.png",
                text1: "荣耀9X PRO"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443315338/428_428_1559306427457mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20i"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443280995/428_428_1545877507789mp.png",
                text1: "荣耀V20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443269778/428_428_1540951264378mp.png",
                text1: "荣耀Magic2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443261482/428_428_1550885454087mp.png",
                text1: "荣耀8X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443273959/428_428_1555729935843mp.png",
                text1: "荣耀10青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png",
                text1: "荣耀Note10"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443258574/428_428_1550885810815mp.png",
                text1: "荣耀8X Max"
            }
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
          
        },
        {
          name: "专属配件",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/j4TbJAMWn9Guo3azGNSc.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
              text1: "荣耀V30 5G",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443352555/428_428_5B02682D327402A4774F83804F79043939BAE5C612C15A6Emp.png",
                text1: "荣耀20青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀20S"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443333400/428_428_0D93336CF739556518B21928F923889A4786B2CD816BEB25mp.png",
                text1: "荣耀Play3"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png",
                text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443304349/428_428_1558245073712mp.png",
                text1: "荣耀20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320394/428_428_1563504284133mp.png",
                text1: "荣耀9X PRO"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443315338/428_428_1559306427457mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20i"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443280995/428_428_1545877507789mp.png",
                text1: "荣耀V20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443269778/428_428_1540951264378mp.png",
                text1: "荣耀Magic2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443261482/428_428_1550885454087mp.png",
                text1: "荣耀8X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443273959/428_428_1555729935843mp.png",
                text1: "荣耀10青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png",
                text1: "荣耀Note10"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443258574/428_428_1550885810815mp.png",
                text1: "荣耀8X Max"
            }
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
          
        },
        {
          name: "通用配件",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353224/428_428_BBB155FB6C09744712785FB380EA616E967F4F8F8CAEC76Amp.png",
              text1: "HUAWEI Mate 30 Pro 5G",
              kind:"HUAWEI Mate系列"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
                text1: "荣耀V30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353477/428_428_87A0D607385DCA7FD02C11828E0C52D3FC77CEFC0E313D74mp.png",
                text1: "HUAWEI Mate 30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀V30 Pro 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443359561/428_428_DBB69C4C46D404887E3183DBF1C14AEF4F968600C87EBFF4mp.png",
                text1: "HUAWEI nova 6 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png",
                text1: "HUAWEI nova 5z"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/a4ElBaXb2Fua7u5AvDsD.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20S"
            },
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "生态产品",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/j4TbJAMWn9Guo3azGNSc.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
              text1: "荣耀V30 5G",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443352555/428_428_5B02682D327402A4774F83804F79043939BAE5C612C15A6Emp.png",
                text1: "荣耀20青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀20S"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443333400/428_428_0D93336CF739556518B21928F923889A4786B2CD816BEB25mp.png",
                text1: "荣耀Play3"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png",
                text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443304349/428_428_1558245073712mp.png",
                text1: "荣耀20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320394/428_428_1563504284133mp.png",
                text1: "荣耀9X PRO"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443315338/428_428_1559306427457mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20i"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443280995/428_428_1545877507789mp.png",
                text1: "荣耀V20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443269778/428_428_1540951264378mp.png",
                text1: "荣耀Magic2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443261482/428_428_1550885454087mp.png",
                text1: "荣耀8X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443273959/428_428_1555729935843mp.png",
                text1: "荣耀10青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png",
                text1: "荣耀Note10"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443258574/428_428_1550885810815mp.png",
                text1: "荣耀8X Max"
            }
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
          
        },
        {
          name: "增值服务",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353224/428_428_BBB155FB6C09744712785FB380EA616E967F4F8F8CAEC76Amp.png",
              text1: "HUAWEI Mate 30 Pro 5G",
              kind:"HUAWEI Mate系列"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
                text1: "荣耀V30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443353477/428_428_87A0D607385DCA7FD02C11828E0C52D3FC77CEFC0E313D74mp.png",
                text1: "HUAWEI Mate 30 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀V30 Pro 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443359561/428_428_DBB69C4C46D404887E3183DBF1C14AEF4F968600C87EBFF4mp.png",
                text1: "HUAWEI nova 6 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png",
                text1: "HUAWEI nova 5z"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/a4ElBaXb2Fua7u5AvDsD.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20S"
            },
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
        },
        {
          name: "智能计算",
          imgTwo:
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/j4TbJAMWn9Guo3azGNSc.jpg",
          arr: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356904/428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
              text1: "荣耀V30 5G",
              kind1:"手机"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443352555/428_428_5B02682D327402A4774F83804F79043939BAE5C612C15A6Emp.png",
                text1: "荣耀20青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443356874/428_428_C7D039CACB38EEE8B779FCB548351AF8684A40D153D2704Bmp.png",
                text1: "荣耀20S"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443333400/428_428_0D93336CF739556518B21928F923889A4786B2CD816BEB25mp.png",
                text1: "荣耀Play3"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png",
                text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443304349/428_428_1558245073712mp.png",
                text1: "荣耀20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320394/428_428_1563504284133mp.png",
                text1: "荣耀9X PRO"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443315338/428_428_1559306427457mp.png"
                ,text1: "荣耀9X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg",
                text1: "荣耀20i"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443280995/428_428_1545877507789mp.png",
                text1: "荣耀V20"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443269778/428_428_1540951264378mp.png",
                text1: "荣耀Magic2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443261482/428_428_1550885454087mp.png",
                text1: "荣耀8X"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443273959/428_428_1555729935843mp.png",
                text1: "荣耀10青春版"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png",
                text1: "荣耀Note10"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443258574/428_428_1550885810815mp.png",
                text1: "荣耀8X Max"
            }
          ],

          PadList: [
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
              text1: "HUAWEI MatePad Pro 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443318711/428_428_1560772272020mp.png",
                text1: "华为平板 M6 10.8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png",
                text1: "荣耀平板5 8英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png",
                text1: "华为平板 M6 8.4英寸"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png",
                text1: "HONOR MagicWatch 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
                text1: "荣耀手环 5"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                text1: "HUAWEI Mate X 5G"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png"
                ,text1: "HUAWEI WATCH GT 2"
            },
            {
              iponImg:
                "https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png",
                text1: "荣耀手表魔法系列"
            },
          ]
          
        }
      ],
      nowIndex: 0
    };
  },
  methods: {
      LiBtn(index, item) {
      this.nowIndex = index;
      // window.console.log(name)
      this.date = item;
    }
  }
};
</script>
<style scoped>
.fiyy {
  display: flex;
}
#a {
  display: none;
}
.fiyy-right {
  margin-top: 53px;
  width: 100%;
  overflow: hidden;
  overflow:scroll;
}
.fiyy ul {
  width: 90px;
  margin-top: 55px;
  list-style: none;
  padding-left: 20px;
  overflow-y: auto;
  overflow:scroll;
}
.fiyy ul li {
  margin-bottom: 40px;
  font-size: 13px;
  /* color: #333; */
}

.active {
  border-right: 1px solid red;
  color: red;
}
</style>