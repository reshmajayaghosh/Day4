import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  districts: any=[
    {
      id:1,
      title: "Kumarakom",
      image: "../../../assets/images/kumarakam.jpg",
      description:"Adorned by the magical charm of the Vembanad Lake, Kumarakom is another beguiling  backwater destination in God’s Own Country. Located within the proximity to Kottayam city, this is the place where even being lazy is also one of the best things you can do during your Kerala holidays.",
      
    },
    {
      id:2,
      title: "Vagamon",
      image: "../../../assets/images/Vagamon.jpg",
      description:"If you are looking for an offbeat, yet captivating holiday experience in Kerala, you must plan your vacation in Vagamon. One of the most scenic hill stations and least explored tourist places in Kerala, this retreat in the Idukki district is known for its salubrious beauty, pleasant climate, and much more.",
    
    
    },
    {
      id:3,
      title: "Malampuzha",
      image: "../../../assets/images/a.jpg",
      description:"Idukki is one of the 14 districts of Kerala state, India, created on 26 January 1972. At that time, the district headquarters was at Kottayam. In June 1976 it was moved to Painavu. Idukki which lies in the Western Ghats of Kerala. Idukki is the second largest district in area but has the lowest population density.",
    
    },
  ];

}
