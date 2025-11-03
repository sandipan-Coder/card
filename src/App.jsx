import Card from './Card'

function App() {

  const allData = [
    {
      "place": "Paris",
      "country": "France",
      "imageURL": "https://thumbs.dreamstime.com/b/eiffel-tower-night-light-paris-france-20029204.jpg"
    },
    {
      "place": "Tokyo",
      "country": "Japan",
      "imageURL": "https://offbeatjapan.com/wp-content/uploads/2011/10/tokyo-tower-night-landmark.jpg"
    },
    {
      "place": "New York",
      "country": "USA",
      "imageURL": "https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg"
    },
    {
      "place": "Sydney",
      "country": "Australia",
      "imageURL": "https://www.curiousgoosetravel.com/wp-content/uploads/2023/07/6262bd_c26714b4525c439db96c8c876676f5e3mv2.jpg"
    },
    {
      "place": "Cairo",
      "country": "Egypt",
      "imageURL": "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/359134499_Cairo.jpg"
    },
    {
      "place": "Rio de Janeiro",
      "country": "Brazil",
      "imageURL": "https://www.ytravelblog.com/wp-content/uploads/2022/09/christ-the-redeemer-rio-de-janeiro.jpg"
    },
    {
      "place": "London",
      "country": "United Kingdom",
      "imageURL": "https://hblimg.mmtcdn.com/content/hubble/img/london/mmt/activities/m_london_tower_bridge_l_435_690.jpg"
    },
    {
      "place": "Rome",
      "country": "Italy",
      "imageURL": "https://www.insightvacations.com/wp-content/uploads/2024/01/caleb-miller-0Bs3et8FYyg-unsplash.jpg"
    },
    {
      "place": "Cape Town",
      "country": "South Africa",
      "imageURL": "https://i.ytimg.com/vi/whFJwSFmUwk/maxresdefault.jpg"
    },
    {
      "place": "Bangkok",
      "country": "Thailand",
      "imageURL": "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/bswpxlc7f9ooxoanlu6h.jpg"
    }
  ]

  return (
    <div className='w-full max-h-full flex flex-wrap p-7 gap-5'>
      {
        allData.map((ele) => {
          return <Card image={ele.imageURL} place={ele.place} country={ele.country} />
        })
      }
    </div>
  )
}

export default App
