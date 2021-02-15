import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcommodityPage } from './addcommodity.page';

describe('AddcommodityPage', () => {
  let component: AddcommodityPage;
  let fixture: ComponentFixture<AddcommodityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcommodityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcommodityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
