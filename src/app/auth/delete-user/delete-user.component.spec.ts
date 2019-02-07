import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserComponent } from './delete-user.component';

describe('DeleteuserComponent', () => {
  let component: DeleteuserComponent;
  let fixture: ComponentFixture<DeleteuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
