import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeplaylistComponent } from './youtubeplaylist.component';

describe('YoutubeplaylistComponent', () => {
  let component: YoutubeplaylistComponent;
  let fixture: ComponentFixture<YoutubeplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
