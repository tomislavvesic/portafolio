import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PersonalInfoActions } from '../actions/personal-info.actions';
import { PersonalInfoStateModel } from '../models/personal-info.model'
import { ApiCallerService } from '../services/api-caller.service'


@State<PersonalInfoStateModel>({
  name: 'personalInfo',
  defaults: {
    personal_info: undefined,
    error: false,
    error_message: false
  }
})
@Injectable()
export class PersonalInfoState {
  constructor(private apiService: ApiCallerService) { }

  @Selector()
  static getPersonalInfo(state: PersonalInfoStateModel) {
    return state.personal_info
  }

  @Action(PersonalInfoActions.GetPersonalInfoAction)
  add({ getState, setState }: StateContext<PersonalInfoStateModel>) {
    const state = getState();
    console.log('state initialized')
    setState({
      ...state,
      personal_info: undefined,
      error: false,
      error_message: null,
    });
    return this.apiService.getPersonalInfo().pipe(
      tap((data: any) => {
        setState({
          ...state,
          personal_info: data,
          error: false
        })
      }),
      catchError(err => {
        setState({
          ...state,
          personal_info: undefined,
          error: true

        })
        return of(err)
      })
    )
  }
}
