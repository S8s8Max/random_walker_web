<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h4>Latest News</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="news in newsList" cols="3">
        <NewsCard
          :newsTitle="news.newsTitle"
          :newsInfo="news.newsInfo"
          :newsContent="news.newsContent"
          :newsImage="news.newsImage"
          :flag="news.flag"
        />
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row>
      <v-col>
        <h4>Indicator Updates</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>aaa</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const newsList = [
  {
    newsTitle: "Sony社、PS5で微増か",
    newsInfo: "2023/5/19 日本経済新聞",
    newsContent: "5月19日のSonyの決算では、巣ごもり需要の増加によるPS5にの売り上げ増加を発表。グループ全体の業績が微増していることを示した。",
    newsImage: "https://source.unsplash.com/featured/300x600",
    flag: false
  },
  {
    newsTitle: "NVIDIA役員不正による交代",
    newsInfo: "2023/5/8 読売新聞",
    newsContent: "今年4月上旬にNVIDIAの役員が横領をした疑いが証拠と共に確定し書類送検された。これにより株価が大きく下落している。",
    newsImage: "https://source.unsplash.com/featured/300x601",
    flag: false
  },
  {
    newsTitle: "切れた腕を接続、医療躍進",
    newsInfo: "2023/5/10 朝日新聞",
    newsContent: "東京医療大学の研究チームが、切れた手足を接続して再度使えるようになる医療技術を開発したと発表した。チームの主任である渡部氏によると世界初とのこと。",
    newsImage: "https://source.unsplash.com/featured/300x602",
    flag: false
  },
  {
    newsTitle: "Sony社、PS5で微増か",
    newsInfo: "2023/5/19 日本経済新聞",
    newsContent: "5月19日のSonyの決算では、巣ごもり需要の増加によるPS5にの売り上げ増加を発表。グループ全体の業績が微増していることを示した。",
    newsImage: "https://source.unsplash.com/featured/300x603",
    flag: false
  },
  {
    newsTitle: "NVIDIA役員不正による交代",
    newsInfo: "2023/5/8 読売新聞",
    newsContent: "今年4月上旬にNVIDIAの役員が横領をした疑いが証拠と共に確定し書類送検された。これにより株価が大きく下落している。",
    newsImage: "https://source.unsplash.com/featured/300x604",
    flag: false
  },
  {
    newsTitle: "切れた腕を接続、医療躍進",
    newsInfo: "2023/5/10 朝日新聞",
    newsContent: "東京医療大学の研究チームが、切れた手足を接続して再度使えるようになる医療技術を開発したと発表した。チームの主任である渡部氏によると世界初とのこと。",
    newsImage: "https://source.unsplash.com/featured/300x605",
    flag: false
  }
]
</script>