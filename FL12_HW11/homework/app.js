const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

let y = document.createElement('ul');
structure1(structure, y);

function structure1(structure, z) {
    structure.map(t => {
        const i = document.createElement('i');
        const h3 = document.createElement('h3');
        const li = document.createElement('li');
        const span = document.createElement('span');

        h3.className = 'folder';
        h3.appendChild(i);
        i.className = 'material-icons';
        i.innerHTML = 'insert_drive_file';
        span.innerHTML = t.title;
        h3.appendChild(span);
        li.appendChild(h3);




        if (t.folder) {
            h3.addEventListener('click', function() {
                    let w = this.nextElementSibling.style.display;
                    if (w === 'block') {
                        this.nextElementSibling.style.display = 'none';
                    } else {
                        this.nextElementSibling.style.display = 'block';
                    }

                    let b = this.children[0].innerHTML;
                    if (b === 'folder_open') {
                        b = 'folder';
                    } else {
                        b = 'folder_open';
                    }

                }




            )
        } else {
            null
        }




        z.appendChild(li);

        if (!t.children && t.folder) {
            const l = document.createElement('ul');
            const m = document.createElement('li');
            const k = document.createElement('h4');
            k.innerHTML = 'Folder is empty';
            k.style.fontStyle = 'italic';
            m.appendChild(k);
            l.appendChild(m);
            li.appendChild(l);
        }
        if (t.children) {
            const z = document.createElement('ul');
            z.style.display = 'none';
            li.appendChild(z);
            structure1(t.children, z);
        }

return t;
       
    });


}




rootNode.appendChild(y);























