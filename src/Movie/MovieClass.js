class Movie{
    constructor(image,title, plot, CastAndCrew, releaseDate, Genre, rating){
        this.image = image;
        this.title = title;
        this.plot = plot;
        this.CastAndCrew = CastAndCrew;
        this.releaseDate = releaseDate;
        this.Genre = Genre;
        this.rating = rating;
    }
}

let moviesList = [
    new Movie("img1.jpg", "Movie 1", "A thrilling action movie.", "John Doe, Jane Doe", "2025-01-01", "Action", 8.5),
    new Movie("img2.jpg", "Movie 2", "A heartwarming drama about love and loss.", "Alex Smith, Linda May", "2024-12-15", "Drama", 7.2),
    new Movie("img3.jpg", "Movie 3", "A comedy with unexpected twists.", "Tom White, Sarah Lee", "2023-07-10", "Comedy", 6.8),
    new Movie("img4.jpg", "Movie 4", "A horror movie that will scare you to your core.", "Paul Adams, Nancy Green", "2023-10-31", "Horror", 7.8),
    new Movie("img5.jpg", "Movie 5", "An adventure to save the world.", "Mike Turner, Emily Walker", "2022-03-05", "Adventure", 8.2),
    new Movie("img6.jpg", "Movie 6", "A futuristic sci-fi thriller.", "Chris James, Susan Brown", "2024-06-17", "Sci-Fi", 7.9),
    new Movie("img7.jpg", "Movie 7", "A tragic tale of sacrifice and heroism.", "Robert King, Emma Clark", "2023-11-11", "War", 9.0),
    new Movie("img8.jpg", "Movie 8", "A magical fantasy set in another world.", "Will Smith, Mia Lee", "2024-04-21", "Fantasy", 8.3),
    new Movie("img9.jpg", "Movie 9", "A detective solving the most complicated cases.", "Jason Brown, Alice White", "2022-08-15", "Mystery", 7.4),
    new Movie("img10.jpg", "Movie 10", "A romance that defies all odds.", "John Green, Mary Blue", "2023-02-25", "Romance", 7.6),
    new Movie("img11.jpg", "Movie 11", "A family-oriented movie about togetherness.", "Max Johnson, Lily White", "2023-12-05", "Family", 6.5),
    new Movie("img12.jpg", "Movie 12", "An animated film with an incredible adventure.", "Andy Mars, Tiffany Stones", "2024-07-19", "Animation", 8.0),
    new Movie("img13.jpg", "Movie 13", "A documentary about the world's endangered species.", "George Brown, Alicia Perez", "2022-09-17", "Documentary", 8.1),
    new Movie("img14.jpg", "Movie 14", "A psychological thriller with a mysterious twist.", "Liam Johnson, Ruth Smith", "2024-11-22", "Thriller", 9.2),
    new Movie("img15.jpg", "Movie 15", "A musical filled with catchy tunes and dance.", "Olivia Hill, Daniel Fox", "2025-01-05", "Musical", 7.3)
];

export {moviesList,Movie}
