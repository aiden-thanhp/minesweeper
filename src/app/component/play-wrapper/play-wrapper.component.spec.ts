import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWrapperComponent } from './play-wrapper.component';

describe('PlayWrapperComponent', () => {
  let component: PlayWrapperComponent;
  let fixture: ComponentFixture<PlayWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
