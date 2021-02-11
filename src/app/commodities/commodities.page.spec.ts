import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommoditiesPage } from './commodities.page';

describe('CommoditiesPage', () => {
  let component: CommoditiesPage;
  let fixture: ComponentFixture<CommoditiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommoditiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommoditiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
