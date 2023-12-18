import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {

  districts: any=[
  {
    id:1,
    title: "Alappuzha",
    image: "../../../assets/images/Alappuzha.png",
    description:"Alappuzha is one of the 14 districts in the state of Kerala in India. It was formed as Alleppey District on August 17, 1957. The name of the district was officially changed to Alappuzha in 1990.",
    
  },
  {
    id:2,
    title: "Ernakulam",
    image: "../../../assets/images/kochi.jpg",
    description:"Ernakulam is a district of Kerala, India in the central part of that state. Spanning an area of about 3,068 km2, Ernakulam district is home to over 12% of Kerala’s population. Its headquarters is located at Kakkanad, a suburb of Kochi city.",
  
  
  },
  {
    id:3,
    title: "Idukki",
    image: "../../../assets/images/idukki.jpeg",
    description:"Idukki is one of the 14 districts of Kerala state, India, created on 26 January 1972. At that time, the district headquarters was at Kottayam. In June 1976 it was moved to Painavu. Idukki which lies in the Western Ghats of Kerala. Idukki is the second largest district in area but has the lowest population density.",
  
  },
  {
    id:4,
    title: "Kannur",
    image: "../../../assets/images/KANNUR-FORT.jpg",
    description:"Kannur District is one of the 14 districts along the west coast in the state of Kerala, India. The town of Kannur is the district headquarters and gives the district its name. The old name, Cannanore is the anglicised form of the Malayalam name Kannur. Kannur district is bounded by Kasaragod District to the north.",
  
  },
  {
    id:5,
    title: "Kasaragod",
    image: "../../../assets/images/kasaragod.jpg",
    description:"According to the 2011 census Kasaragod district has a population of 1,307,375, roughly equal to the nation of Mauritius or the US state of New Hampshire. This gives it a ranking of 375th in India (out of a total of 640). The district has a population density of 654 inhabitants per square kilometre (1,690/sq mi) .",
  
  },
  {
    id:6,
    title: "Kollam",
    image: "../../../assets/images/kollam.jpeg",
    description:"Kollam district (formerly Quilon) is one of 14 districts of the state of Kerala, India. The district has a cross-section of Kerala's natural attributes; it is endowed with a long coastline. The district has many source of waterbodies. Kallada river is one among it and the east side land of river is EastKallada and the west side land is WestKallada. ",
  
  },
  {
    id:7,
    title: "Kottayam",
    image: "../../../assets/images/kottayam.jpg",
    description:"Kottayam District is one of the 14 districts in the state of Kerala, India. Though the district is 157 km south to Kunnamkulam. ",
  
  },
  {
    id:8,
    title: "Kozhikode",
    image: "../../../assets/images/kozhikode.jpeg",
    description:"Kozhikode is a district in the state of Kerala, in India. It is divided into four taluks - Kozhikode, Vadakara, Koyilandy and Thamarassery.",
  
  },
  {
    id:9,
    title: "Malappuram",
    image: "../../../assets/images/malappuram2.jpeg",
    description:"Malappuram district is a district in the state of Kerala, India. The headquarters at Malappuram.The district was formed on 16 June 1969.   Malappuram is a prominent district in Kerala.",
  
  },
  {
    id:10,
    title: "Palakkad",
    image: "../../../assets/images/palakkad.jpg",
    description:"Palakkad District is one of the 14 districts of the Indian state of Kerala. Also, it is the largest district in kerala from 2006. The city of Palakkad is the district headquarters. ",
  
  },
  {
    id:11,
    title: "Pathanamthitta",
    image: "../../../assets/images/pathanamthitta.jpeg",
    description:"Pathanamthitta District is a district in the southern part of Kerala, India. The district headquarters is in the town of Pathanamthitta. There are four municipalities in Pathanamthitta: Tiruvalla, Adoor, Pathanamthitta and Pandalam.",
  
  },
  {
    id:12,
    title: "Thiruvananthapuram",
    image: "../../../assets/images/Thiruvananthapuram.png",
    description:"Thiruvananthapuram District is the southernmost district of the coastal state of Kerala. It is the largest city in Kerala. It came into existence in the year 1957.",
  
  },
  {
    id:13,
    title: "Thrissur",
    image: "../../../assets/images/thrissur.jpeg",
    description:"Thrissur (also Trichur, Trissur) is a revenue district of Kerala in the central part of that state. Spanning an area of about 3,032 km2, Thrissur district is home to over 10% of Kerala’s population. Thrissur district was formed on July 1, 1949, with the headquarters at Thrissur City. Thrissur is known as the Cultural Capital of Kerala.",
  
  },
  {
    id:14,
    title: "Wayanad",
    image: "../../../assets/images/wayanad.webp",
    description:"Wayanad District is a district in the northeast of Kerala state, India with headquarters at the town of Kalpetta. The district was formed on 1 November 1980 as the 12th district in Kerala by carving out areas from Kozhikode and Kannur districts. The district is 3.79% urbanised, with three municipal towns Kalpetta, Mananthavady and Sulthan Bathery.",
  
  },
  ];
 
}
