import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'shortenTitle'
})

export class ShortenTitlePipe implements PipeTransform {
    transform(value:string) {
        if(value.length > 25 ) {
            return value.substr(0, 25) + '...'
        }
        return value;
        
    }
}