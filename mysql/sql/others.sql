CREATE TABLE IF NOT EXISTS  `others` (
    `id` varchar(10) NOT NULL,
    `customer` varchar(20) NOT NULL,  -- 其他厂家需要写明
    `model` varchar(20) DEFAULT NULL,
    `type` varchar(12) DEFAULT NULL,
    `color` varchar(20) DEFAULT NULL,
    `pieces` smallint DEFAULT NULL,
    `price` float(3,1) DEFAULT NULL,
    `amount` float(6,1) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `remark` varchar(20) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- INSERT INTO `hell` set id='zf000', model='hell', type='镜架', color='IP金', pieces=2, price=1.7, amount=3.4;
