
let folderImages = 
{
    'isFolder': true,
    'name': 'images',
    'content': [
        {
            'isFolder': false,
            'name': 'abc.jpg',
            'content': [],
        },
        {
            'isFolder': false,
            'name': 'abc1.jpg',
            'content': [],
        },
        {
            'isFolder': true,
            'name': 'abc',
            'content': [
                {
                    'isFolder': false,
                    'content': [],
                    'name': 'abcd.jpg'
                }
            ],
        }
    ],
}

// cách 1: dùng đệ quy
function timFile(searchString, folder){
    let searchResult = '';

    if (!folder.isFolder){ // nếu là file
        if(folder.name.includes(searchString)){
            searchResult += folder.name + '\n';
        }
    } else { // là folder
        for (const smallerFolder of folder.content) {
            searchResult += timFile(searchString, smallerFolder);
        }
    }
    return searchResult;
}

// let searchString = 'd';
// let find = timFile(searchString, folderImages);
// console.log(find);

// Cách 2: dùng vòng while
let searchString = '';
let listFolderSearch = [folderImages];
let result = [];
while(listFolderSearch.length > 0){
    let search = listFolderSearch.shift();
    if(!search.isFolder) {// nếu là 1 file
        if(search.name.includes(searchString)){
            result.push(search);
        }
    }else{ // ngược lại, là folder
        listFolderSearch = listFolderSearch.concat(search.content);
    }
}
console.log(result);

