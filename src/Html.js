// Helper utility to generate html code
// Takes a manager object, engineers & interns array of objects
class Html {
    constructor(manager, engineers, interns) {
        this.manager = manager;
        this.engineers = engineers;
        this.interns = interns;
    }
    
    // Generate the !DOCTYPE, html, and head elements
    getHtmlSkeleton() {
        // Internal function to create the card html
        function htmlCard(memberObj) {
            console.log('htmlcard function; ');
            console.log(memberObj);
            
            // The last field in the html card is dependent on title
            const htmlH3 = (title) => {
                switch (title) {
                    case 'Manager':
                        title = 'Office Number: ';
                        break;
                    case 'Engineer':
                        title = 'GitHub: ';
                        break;
                    case 'Intern':
                        title = 'School: ';
                        break;
                    default:
                        // TODO - Add proper error checking/throw here
                        //console.error(`ERROR trying to generate html for ${title} employee.`);
                        break;
                    //
                }
                return title;
            };
            const htmlUniqueTag = (title) => {
                switch (title) {
                    case 'Manager':
                        title = `<span>${memberObj.officeNumber}</span>`;
                        break;
                    case 'Engineer':
                        console.log(memberObj.getGithub());
                        title = `<a href="https://github.com/${memberObj.getGithub()}" target="_blank">${memberObj.getGithub()}</a>`;
                        break;
                    case 'Intern':
                        title = `<span>${memberObj.getSchool()}</span>`;
                        break;
                    default:
                        // TODO - Add proper error checking/throw here
                        //console.error(`ERROR trying to generate html for ${title} employee.`);
                        break;
                    //
                }
                return title;
            };

            return `
        <!-- Team member card container -->
        <article class="container-card">
            <!-- Top name and title of card -->
            <div class="card-title">
                <!-- Team member name -->
                <div>
                    <h2>${memberObj.name}</h2>
                </div>
                <!-- Team member title -->
                <div>
                    <!-- Title name -->
                    <h2>${memberObj.getRole()}</h2>
                </div>
            </div>
            <!-- Card content container-->
            <div class="card-body">
                <!-- Team member info container -->
                <div>
                    <!-- Team member ID -->
                    <div class="card-field">
                        <h3>ID: </h3>
                        <span>${memberObj.id}</span>
                    </div>
                    <!-- Team member email -->
                    <div class="card-field">
                        <h3>Email: </h3>
                        <a href="mailto:${memberObj.email}">${memberObj.email}</a>
                    </div>
                    <!-- Team member GitHub or office number -->
                    <div class="card-field">
                        <h3>${htmlH3(memberObj.getRole())}</h3>
                        ${htmlUniqueTag(memberObj.getRole())}
                    </div>
                </div>
            </div>
        </article>
            `;
        }

        // Variables to hold the html card code
        const managerCard = htmlCard(this.manager);
        let engineerCards = '';
        let internCards = '';

        // Loop through the engineers and interns arrays and create html cards
        this.engineers.forEach(val => {
            engineerCards = engineerCards.concat(`${htmlCard(val)}`);
        });
        this.interns.forEach(val => {   
            internCards = internCards.concat(`${htmlCard(val)}`);
        });

        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- link for font, licensed under the SIL Open Font License (OFL) -->
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <!-- Top title and nav bar -->
    <header>
        <h1>The Team</h1>
    </header>

    <!-- Main content of page -->
    <main>
        ${managerCard}
        ${engineerCards}
        ${internCards}
    </main>
</body>
</html>  
        `;
    }
}

module.exports = Html;