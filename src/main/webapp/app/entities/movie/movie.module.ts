import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MrpSharedModule } from 'app/shared';
import {
    MovieComponent,
    MovieDetailComponent,
    MovieUpdateComponent,
    MovieDeletePopupComponent,
    MovieDeleteDialogComponent,
    movieRoute,
    moviePopupRoute
} from './';
import { MrpReviewModule } from 'app/entities/review/review.module';

const ENTITY_STATES = [...movieRoute, ...moviePopupRoute];

@NgModule({
    imports: [MrpSharedModule, RouterModule.forChild(ENTITY_STATES), MrpReviewModule],
    declarations: [MovieComponent, MovieDetailComponent, MovieUpdateComponent, MovieDeleteDialogComponent, MovieDeletePopupComponent],
    entryComponents: [MovieComponent, MovieUpdateComponent, MovieDeleteDialogComponent, MovieDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MrpMovieModule {}
