import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListComponent } from './ProdutosListComponent';

describe('ProdutosListComponent', () => {
  let component: ProdutosListComponent;
  let fixture: ComponentFixture<ProdutosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosListComponent]
    });
    fixture = TestBed.createComponent(ProdutosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
