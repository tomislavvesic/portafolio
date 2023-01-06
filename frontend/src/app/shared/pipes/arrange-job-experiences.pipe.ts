import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrangeJobExperiences'
})
export class ArrangeJobExperiencesPipe implements PipeTransform {

  transform(experiencesArray: any): any {
    let filteredExperiencesArray = []

    experiencesArray.forEach(experience => {
      if (experience !== 'worktime') {
        switch (experience?.key) {
          case 'General':
            filteredExperiencesArray[0] = experience
            break
          case 'Web Developer':
            filteredExperiencesArray[1] = experience
            break
          case 'Data Engineer':
            filteredExperiencesArray[2] = experience
            break
          case 'Devops':
            filteredExperiencesArray[3] = experience
            break
          case 'Team Leader':
            filteredExperiencesArray[4] = experience
            break
          default:
            null
        }
      }
    });
    filteredExperiencesArray = filteredExperiencesArray.filter(n => n)

    return filteredExperiencesArray;
  }

}
