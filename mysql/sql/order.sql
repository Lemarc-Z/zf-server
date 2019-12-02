CREATE TABLE IF NOT EXISTS  `hell` (
    `id` varchar(10) NOT NULL,
    `customer` varchar(10) DEFAULT NULL,
    `model` varchar(10) DEFAULT NULL,
    `type` varchar(10) DEFAULT NULL,
    `color` varchar(10) DEFAULT NULL,
    `pieces` int DEFAULT NULL,
    `price` float DEFAULT NULL,
    `amount` float DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `hell` set id='zf000', customer='南平', model='hell', type='镜架', color='IP金', pieces=2, price=1.7, amount=3.4;
