import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']  // ✅ corregido
})
export class ProductViewComponent implements OnInit   {
  ngOnInit(){}
}
