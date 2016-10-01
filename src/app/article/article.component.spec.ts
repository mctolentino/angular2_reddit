/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ArticleComponent } from './article.component';

describe('Component: Article', () => {
  let component;
  it('should create an instance', () => {
    component = new ArticleComponent();
    expect(component).toBeTruthy();
    expect(component.votes).toBe(0);
  });

  describe('when an article is upvoted', () => {
    beforeEach(() => {
      component.voteUp();
    });
    it('should increment votes value', () => {
      expect(component.votes).toBe(1);
    });
  });
});
