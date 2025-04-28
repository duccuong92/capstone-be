CREATE TABLE `Users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `fullName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `age` INT,
    `avatar` VARCHAR(255),
    `deletedBy` INT NOT NULL DEFAULT 0,
    `isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
    `deletedAt` TIMESTAMP NULL DEFAULT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `Images` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `imageName` VARCHAR(255) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `userId` INT,
    FOREIGN KEY (`userId`) REFERENCES `Users` (`id`),
    `deletedBy` INT NOT NULL DEFAULT 0,
    `isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
    `deletedAt` TIMESTAMP NULL DEFAULT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `Comments` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `imageId` INT NOT NULL,
    `commentDate` Date,
    `content` TEXT,
    FOREIGN KEY (`userId`) REFERENCES `Users` (`id`),
    FOREIGN KEY (`imageId`) REFERENCES `Images` (`id`),
    `deletedBy` INT NOT NULL DEFAULT 0,
    `isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
    `deletedAt` TIMESTAMP NULL DEFAULT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `Saved_Images` (
    `userId` INT NOT NULL,
    `imageId` INT NOT NULL,
    `saveDate` DATE,
    PRIMARY KEY (`userId`, `imageId`),
    FOREIGN KEY (`userId`) REFERENCES `Users` (`id`),
    FOREIGN KEY (`imageId`) REFERENCES `Images` (`id`),
    `deletedBy` INT NOT NULL DEFAULT 0,
    `isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
    `deletedAt` TIMESTAMP NULL DEFAULT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
    `Users` (`fullName`, `email`, `password`, `age`, `avatar`)
VALUES
    (
        'Emma Johnson',
        'emma.johnson@example.com',
        'password123',
        28,
        'https://example.com/avatars/emma.jpg'
    ),
    (
        'Liam Smith',
        'liam.smith@example.com',
        'password123',
        32,
        'https://example.com/avatars/liam.jpg'
    ),
    (
        'Olivia Brown',
        'olivia.brown@example.com',
        'password123',
        25,
        'https://example.com/avatars/olivia.jpg'
    ),
    (
        'Noah Williams',
        'noah.williams@example.com',
        'password123',
        30,
        'https://example.com/avatars/noah.jpg'
    ),
    (
        'Sophia Jones',
        'sophia.jones@example.com',
        'password123',
        27,
        'https://example.com/avatars/sophia.jpg'
    );

INSERT INTO
    `Images` (`imageName`, `url`, `description`, `userId`)
VALUES
    (
        'Cozy Living Room',
        'https://example.com/images/livingroom.jpg',
        'A modern and cozy living room design.',
        1
    ),
    (
        'Beach Sunset',
        'https://example.com/images/beachsunset.jpg',
        'Sunset view at the beach during summer.',
        2
    ),
    (
        'Mountain Hiking',
        'https://example.com/images/hiking.jpg',
        'Exploring beautiful mountain trails.',
        3
    ),
    (
        'City Skyline',
        'https://example.com/images/cityskyline.jpg',
        'Night view of the city skyline.',
        4
    ),
    (
        'Minimalist Workspace',
        'https://example.com/images/workspace.jpg',
        'A clean and minimalist workspace setup.',
        5
    ),
    (
        'Vintage Cafe',
        'https://example.com/images/vintagecafe.jpg',
        'Charming vintage cafe with outdoor seating.',
        1
    ),
    (
        'Winter Wonderland',
        'https://example.com/images/winter.jpg',
        'Snow-covered trees and landscape.',
        2
    ),
    (
        'Boho Bedroom',
        'https://example.com/images/bohobedroom.jpg',
        'Bohemian style cozy bedroom.',
        3
    ),
    (
        'Summer Picnic',
        'https://example.com/images/picnic.jpg',
        'Family enjoying a picnic in the park.',
        4
    ),
    (
        'Artistic Wall Decor',
        'https://example.com/images/walldecor.jpg',
        'Creative wall art ideas for home.',
        5
    );

INSERT INTO
    `Comments` (`userId`, `imageId`, `commentDate`, `content`)
VALUES
    (1, 2, '2025-04-25', 'Absolutely stunning view!'),
    (
        2,
        3,
        '2025-04-26',
        'This place looks amazing for hiking.'
    ),
    (
        3,
        1,
        '2025-04-26',
        'Love the cozy vibe of this room.'
    ),
    (
        4,
        5,
        '2025-04-27',
        'I want my workspace to look like this!'
    ),
    (
        5,
        4,
        '2025-04-27',
        'The city lights are so beautiful at night.'
    ),
    (
        2,
        6,
        '2025-04-27',
        'This cafe is so charming, love it.'
    ),
    (
        1,
        7,
        '2025-04-28',
        'Winter scenes are my favorite.'
    ),
    (
        5,
        8,
        '2025-04-28',
        'Such a creative bedroom setup!'
    ),
    (
        4,
        9,
        '2025-04-28',
        'Perfect spot for a summer picnic.'
    ),
    (
        3,
        10,
        '2025-04-28',
        'Great ideas for wall decorations.'
    );

INSERT INTO
    `Saved_Images` (`userId`, `imageId`, `saveDate`)
VALUES
    (1, 4, '2025-04-26'),
    (2, 1, '2025-04-26'),
    (3, 2, '2025-04-27'),
    (4, 5, '2025-04-27'),
    (5, 3, '2025-04-27'),
    (1, 6, '2025-04-28'),
    (2, 7, '2025-04-28'),
    (3, 8, '2025-04-28'),
    (4, 9, '2025-04-28'),
    (5, 10, '2025-04-28');

SELECT
    *
FROM
    `Users`;

SELECT
    *
FROM
    `Images`;

SELECT
    *
FROM
    `Comments`;

SELECT
    *
FROM
    `Saved_Images`;