import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'shortenStoryline'
})

export class ShortenStorylinePipe implements PipeTransform {
    transform(value:string) {
        if(value.length > 180 ) {
            return value.substr(0, 180) + '...'
        }
        return value;
        
    }
}