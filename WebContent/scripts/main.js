/**
 * Client to the game
 */
var gameStatus;
var bidsForCurrentRound = {};
var winningScore;

function getInitialStatus() {
	return '{ "items":[{ "index": 1, "type": "t5" },{ "index": 2, "type": "t4" },{ "index": 3, "type": "t3" },{ "index": 4, "type": "t1" },{ "index": 5, "type": "t5" },{ "index": 6, "type": "t3" },{ "index": 7, "type": "t4" },{ "index": 8, "type": "t3" },{ "index": 9, "type": "t3" },{ "index": 10, "type": "t1" },{ "index": 11, "type": "t1" },{ "index": 12, "type": "t4" },{ "index": 13, "type": "t5" },{ "index": 14, "type": "t4" },{ "index": 15, "type": "t2" },{ "index": 16, "type": "t5" },{ "index": 17, "type": "t5" },{ "index": 18, "type": "t2" },{ "index": 19, "type": "t5" },{ "index": 20, "type": "t4" },{ "index": 21, "type": "t5" },{ "index": 22, "type": "t4" },{ "index": 23, "type": "t2" },{ "index": 24, "type": "t4" },{ "index": 25, "type": "t1" },{ "index": 26, "type": "t3" },{ "index": 27, "type": "t4" },{ "index": 28, "type": "t2" },{ "index": 29, "type": "t3" },{ "index": 30, "type": "t2" },{ "index": 31, "type": "t1" },{ "index": 32, "type": "t3" },{ "index": 33, "type": "t3" },{ "index": 34, "type": "t2" },{ "index": 35, "type": "t5" },{ "index": 36, "type": "t4" },{ "index": 37, "type": "t2" },{ "index": 38, "type": "t5" },{ "index": 39, "type": "t2" },{ "index": 40, "type": "t3" },{ "index": 41, "type": "t2" },{ "index": 42, "type": "t2" },{ "index": 43, "type": "t5" },{ "index": 44, "type": "t3" },{ "index": 45, "type": "t3" },{ "index": 46, "type": "t5" },{ "index": 47, "type": "t5" },{ "index": 48, "type": "t5" },{ "index": 49, "type": "t3" },{ "index": 50, "type": "t1" },{ "index": 51, "type": "t2" },{ "index": 52, "type": "t4" },{ "index": 53, "type": "t2" },{ "index": 54, "type": "t5" },{ "index": 55, "type": "t3" },{ "index": 56, "type": "t2" },{ "index": 57, "type": "t3" },{ "index": 58, "type": "t3" },{ "index": 59, "type": "t4" },{ "index": 60, "type": "t4" },{ "index": 61, "type": "t2" },{ "index": 62, "type": "t3" },{ "index": 63, "type": "t2" },{ "index": 64, "type": "t2" },{ "index": 65, "type": "t2" },{ "index": 66, "type": "t5" },{ "index": 67, "type": "t4" },{ "index": 68, "type": "t5" },{ "index": 69, "type": "t5" },{ "index": 70, "type": "t2" },{ "index": 71, "type": "t1" },{ "index": 72, "type": "t5" },{ "index": 73, "type": "t1" },{ "index": 74, "type": "t4" },{ "index": 75, "type": "t2" },{ "index": 76, "type": "t4" },{ "index": 77, "type": "t4" },{ "index": 78, "type": "t3" },{ "index": 79, "type": "t2" },{ "index": 80, "type": "t4" },{ "index": 81, "type": "t2" },{ "index": 82, "type": "t2" },{ "index": 83, "type": "t3" },{ "index": 84, "type": "t3" },{ "index": 85, "type": "t2" },{ "index": 86, "type": "t4" },{ "index": 87, "type": "t4" },{ "index": 88, "type": "t1" },{ "index": 89, "type": "t1" },{ "index": 90, "type": "t2" },{ "index": 91, "type": "t2" },{ "index": 92, "type": "t4" },{ "index": 93, "type": "t2" },{ "index": 94, "type": "t3" },{ "index": 95, "type": "t5" },{ "index": 96, "type": "t2" },{ "index": 97, "type": "t3" },{ "index": 98, "type": "t1" },{ "index": 99, "type": "t4" },{ "index": 100, "type": "t3" },{ "index": 101, "type": "t2" },{ "index": 102, "type": "t3" },{ "index": 103, "type": "t2" },{ "index": 104, "type": "t4" },{ "index": 105, "type": "t2" },{ "index": 106, "type": "t1" },{ "index": 107, "type": "t5" },{ "index": 108, "type": "t2" },{ "index": 109, "type": "t4" },{ "index": 110, "type": "t3" },{ "index": 111, "type": "t2" },{ "index": 112, "type": "t2" },{ "index": 113, "type": "t3" },{ "index": 114, "type": "t4" },{ "index": 115, "type": "t1" },{ "index": 116, "type": "t5" },{ "index": 117, "type": "t4" },{ "index": 118, "type": "t2" },{ "index": 119, "type": "t2" },{ "index": 120, "type": "t1" },{ "index": 121, "type": "t2" },{ "index": 122, "type": "t1" },{ "index": 123, "type": "t5" },{ "index": 124, "type": "t1" },{ "index": 125, "type": "t5" },{ "index": 126, "type": "t3" },{ "index": 127, "type": "t3" },{ "index": 128, "type": "t2" },{ "index": 129, "type": "t5" },{ "index": 130, "type": "t2" },{ "index": 131, "type": "t3" },{ "index": 132, "type": "t2" },{ "index": 133, "type": "t3" },{ "index": 134, "type": "t3" },{ "index": 135, "type": "t5" },{ "index": 136, "type": "t4" },{ "index": 137, "type": "t4" },{ "index": 138, "type": "t2" },{ "index": 139, "type": "t1" },{ "index": 140, "type": "t2" },{ "index": 141, "type": "t5" },{ "index": 142, "type": "t4" },{ "index": 143, "type": "t5" },{ "index": 144, "type": "t1" },{ "index": 145, "type": "t3" },{ "index": 146, "type": "t2" },{ "index": 147, "type": "t5" },{ "index": 148, "type": "t4" },{ "index": 149, "type": "t2" },{ "index": 150, "type": "t4" },{ "index": 151, "type": "t4" },{ "index": 152, "type": "t1" },{ "index": 153, "type": "t1" },{ "index": 154, "type": "t3" },{ "index": 155, "type": "t5" },{ "index": 156, "type": "t1" },{ "index": 157, "type": "t1" },{ "index": 158, "type": "t1" },{ "index": 159, "type": "t5" },{ "index": 160, "type": "t4" },{ "index": 161, "type": "t4" },{ "index": 162, "type": "t4" },{ "index": 163, "type": "t2" },{ "index": 164, "type": "t5" },{ "index": 165, "type": "t1" },{ "index": 166, "type": "t4" },{ "index": 167, "type": "t2" },{ "index": 168, "type": "t5" },{ "index": 169, "type": "t3" },{ "index": 170, "type": "t4" },{ "index": 171, "type": "t1" },{ "index": 172, "type": "t2" },{ "index": 173, "type": "t4" },{ "index": 174, "type": "t1" },{ "index": 175, "type": "t4" },{ "index": 176, "type": "t3" },{ "index": 177, "type": "t1" },{ "index": 178, "type": "t5" },{ "index": 179, "type": "t5" },{ "index": 180, "type": "t1" },{ "index": 181, "type": "t2" },{ "index": 182, "type": "t1" },{ "index": 183, "type": "t4" },{ "index": 184, "type": "t2" },{ "index": 185, "type": "t3" },{ "index": 186, "type": "t4" },{ "index": 187, "type": "t4" },{ "index": 188, "type": "t1" },{ "index": 189, "type": "t2" },{ "index": 190, "type": "t1" },{ "index": 191, "type": "t3" },{ "index": 192, "type": "t3" },{ "index": 193, "type": "t5" },{ "index": 194, "type": "t3" },{ "index": 195, "type": "t1" },{ "index": 196, "type": "t1" },{ "index": 197, "type": "t3" },{ "index": 198, "type": "t2" },{ "index": 199, "type": "t3" },{ "index": 200, "type": "t1" },{ "index": 201, "type": "t1" },{ "index": 202, "type": "t2" },{ "index": 203, "type": "t1" },{ "index": 204, "type": "t1" },{ "index": 205, "type": "t2" },{ "index": 206, "type": "t3" },{ "index": 207, "type": "t5" },{ "index": 208, "type": "t3" },{ "index": 209, "type": "t4" },{ "index": 210, "type": "t2" },{ "index": 211, "type": "t1" },{ "index": 212, "type": "t4" },{ "index": 213, "type": "t2" },{ "index": 214, "type": "t2" },{ "index": 215, "type": "t5" },{ "index": 216, "type": "t5" },{ "index": 217, "type": "t5" },{ "index": 218, "type": "t5" },{ "index": 219, "type": "t5" },{ "index": 220, "type": "t2" },{ "index": 221, "type": "t5" },{ "index": 222, "type": "t1" },{ "index": 223, "type": "t3" },{ "index": 224, "type": "t4" },{ "index": 225, "type": "t4" },{ "index": 226, "type": "t3" },{ "index": 227, "type": "t5" },{ "index": 228, "type": "t3" },{ "index": 229, "type": "t1" },{ "index": 230, "type": "t2" },{ "index": 231, "type": "t3" },{ "index": 232, "type": "t1" },{ "index": 233, "type": "t4" },{ "index": 234, "type": "t1" },{ "index": 235, "type": "t5" },{ "index": 236, "type": "t4" },{ "index": 237, "type": "t5" },{ "index": 238, "type": "t3" },{ "index": 239, "type": "t5" },{ "index": 240, "type": "t1" },{ "index": 241, "type": "t4" },{ "index": 242, "type": "t1" },{ "index": 243, "type": "t4" },{ "index": 244, "type": "t3" },{ "index": 245, "type": "t4" },{ "index": 246, "type": "t4" },{ "index": 247, "type": "t2" },{ "index": 248, "type": "t5" },{ "index": 249, "type": "t4" },{ "index": 250, "type": "t3" },{ "index": 251, "type": "t2" },{ "index": 252, "type": "t1" },{ "index": 253, "type": "t5" },{ "index": 254, "type": "t5" },{ "index": 255, "type": "t1" },{ "index": 256, "type": "t3" },{ "index": 257, "type": "t3" },{ "index": 258, "type": "t2" },{ "index": 259, "type": "t5" },{ "index": 260, "type": "t2" },{ "index": 261, "type": "t5" },{ "index": 262, "type": "t3" },{ "index": 263, "type": "t2" },{ "index": 264, "type": "t1" },{ "index": 265, "type": "t2" },{ "index": 266, "type": "t5" },{ "index": 267, "type": "t1" },{ "index": 268, "type": "t3" },{ "index": 269, "type": "t4" },{ "index": 270, "type": "t5" },{ "index": 271, "type": "t5" },{ "index": 272, "type": "t5" },{ "index": 273, "type": "t1" },{ "index": 274, "type": "t4" },{ "index": 275, "type": "t4" },{ "index": 276, "type": "t2" },{ "index": 277, "type": "t3" },{ "index": 278, "type": "t1" },{ "index": 279, "type": "t2" },{ "index": 280, "type": "t3" },{ "index": 281, "type": "t5" },{ "index": 282, "type": "t3" },{ "index": 283, "type": "t5" },{ "index": 284, "type": "t3" },{ "index": 285, "type": "t4" },{ "index": 286, "type": "t1" },{ "index": 287, "type": "t1" },{ "index": 288, "type": "t4" },{ "index": 289, "type": "t3" },{ "index": 290, "type": "t4" },{ "index": 291, "type": "t5" },{ "index": 292, "type": "t3" },{ "index": 293, "type": "t2" },{ "index": 294, "type": "t2" },{ "index": 295, "type": "t3" },{ "index": 296, "type": "t4" },{ "index": 297, "type": "t1" },{ "index": 298, "type": "t5" },{ "index": 299, "type": "t4" },{ "index": 300, "type": "t5" },{ "index": 301, "type": "t2" },{ "index": 302, "type": "t2" },{ "index": 303, "type": "t1" },{ "index": 304, "type": "t4" },{ "index": 305, "type": "t1" },{ "index": 306, "type": "t4" },{ "index": 307, "type": "t1" },{ "index": 308, "type": "t5" },{ "index": 309, "type": "t4" },{ "index": 310, "type": "t2" },{ "index": 311, "type": "t2" },{ "index": 312, "type": "t3" },{ "index": 313, "type": "t3" },{ "index": 314, "type": "t4" },{ "index": 315, "type": "t4" },{ "index": 316, "type": "t2" },{ "index": 317, "type": "t2" },{ "index": 318, "type": "t1" },{ "index": 319, "type": "t2" },{ "index": 320, "type": "t1" },{ "index": 321, "type": "t3" },{ "index": 322, "type": "t5" },{ "index": 323, "type": "t4" },{ "index": 324, "type": "t4" },{ "index": 325, "type": "t1" },{ "index": 326, "type": "t4" },{ "index": 327, "type": "t5" },{ "index": 328, "type": "t4" },{ "index": 329, "type": "t5" },{ "index": 330, "type": "t3" },{ "index": 331, "type": "t2" },{ "index": 332, "type": "t5" },{ "index": 333, "type": "t1" },{ "index": 334, "type": "t3" },{ "index": 335, "type": "t3" },{ "index": 336, "type": "t3" },{ "index": 337, "type": "t4" },{ "index": 338, "type": "t4" },{ "index": 339, "type": "t3" },{ "index": 340, "type": "t3" },{ "index": 341, "type": "t5" },{ "index": 342, "type": "t1" },{ "index": 343, "type": "t4" },{ "index": 344, "type": "t5" },{ "index": 345, "type": "t4" },{ "index": 346, "type": "t3" },{ "index": 347, "type": "t5" },{ "index": 348, "type": "t4" },{ "index": 349, "type": "t1" },{ "index": 350, "type": "t5" },{ "index": 351, "type": "t2" },{ "index": 352, "type": "t3" },{ "index": 353, "type": "t5" },{ "index": 354, "type": "t2" },{ "index": 355, "type": "t4" },{ "index": 356, "type": "t5" },{ "index": 357, "type": "t1" },{ "index": 358, "type": "t5" },{ "index": 359, "type": "t3" },{ "index": 360, "type": "t2" },{ "index": 361, "type": "t4" },{ "index": 362, "type": "t3" },{ "index": 363, "type": "t3" },{ "index": 364, "type": "t5" },{ "index": 365, "type": "t3" },{ "index": 366, "type": "t1" },{ "index": 367, "type": "t2" },{ "index": 368, "type": "t5" },{ "index": 369, "type": "t1" },{ "index": 370, "type": "t3" },{ "index": 371, "type": "t2" },{ "index": 372, "type": "t3" },{ "index": 373, "type": "t4" },{ "index": 374, "type": "t5" },{ "index": 375, "type": "t5" },{ "index": 376, "type": "t5" },{ "index": 377, "type": "t4" },{ "index": 378, "type": "t5" },{ "index": 379, "type": "t4" },{ "index": 380, "type": "t5" },{ "index": 381, "type": "t1" },{ "index": 382, "type": "t2" },{ "index": 383, "type": "t4" },{ "index": 384, "type": "t1" },{ "index": 385, "type": "t1" },{ "index": 386, "type": "t4" },{ "index": 387, "type": "t3" },{ "index": 388, "type": "t3" },{ "index": 389, "type": "t2" },{ "index": 390, "type": "t3" },{ "index": 391, "type": "t1" },{ "index": 392, "type": "t1" },{ "index": 393, "type": "t3" },{ "index": 394, "type": "t2" },{ "index": 395, "type": "t1" },{ "index": 396, "type": "t1" },{ "index": 397, "type": "t3" },{ "index": 398, "type": "t3" },{ "index": 399, "type": "t1" },{ "index": 400, "type": "t1" },{ "index": 401, "type": "t1" },{ "index": 402, "type": "t2" },{ "index": 403, "type": "t5" },{ "index": 404, "type": "t4" },{ "index": 405, "type": "t2" },{ "index": 406, "type": "t1" },{ "index": 407, "type": "t2" },{ "index": 408, "type": "t2" },{ "index": 409, "type": "t2" },{ "index": 410, "type": "t5" },{ "index": 411, "type": "t1" },{ "index": 412, "type": "t4" },{ "index": 413, "type": "t3" },{ "index": 414, "type": "t1" },{ "index": 415, "type": "t4" },{ "index": 416, "type": "t2" },{ "index": 417, "type": "t2" },{ "index": 418, "type": "t2" },{ "index": 419, "type": "t5" },{ "index": 420, "type": "t3" },{ "index": 421, "type": "t3" },{ "index": 422, "type": "t5" },{ "index": 423, "type": "t5" },{ "index": 424, "type": "t4" },{ "index": 425, "type": "t5" },{ "index": 426, "type": "t5" },{ "index": 427, "type": "t5" },{ "index": 428, "type": "t4" },{ "index": 429, "type": "t5" },{ "index": 430, "type": "t2" },{ "index": 431, "type": "t1" },{ "index": 432, "type": "t5" },{ "index": 433, "type": "t1" },{ "index": 434, "type": "t2" },{ "index": 435, "type": "t1" },{ "index": 436, "type": "t3" },{ "index": 437, "type": "t4" },{ "index": 438, "type": "t4" },{ "index": 439, "type": "t1" },{ "index": 440, "type": "t3" },{ "index": 441, "type": "t2" },{ "index": 442, "type": "t1" },{ "index": 443, "type": "t4" },{ "index": 444, "type": "t2" },{ "index": 445, "type": "t5" },{ "index": 446, "type": "t1" },{ "index": 447, "type": "t5" },{ "index": 448, "type": "t5" },{ "index": 449, "type": "t1" },{ "index": 450, "type": "t5" },{ "index": 451, "type": "t3" },{ "index": 452, "type": "t5" },{ "index": 453, "type": "t5" },{ "index": 454, "type": "t1" },{ "index": 455, "type": "t3" },{ "index": 456, "type": "t4" },{ "index": 457, "type": "t4" },{ "index": 458, "type": "t4" },{ "index": 459, "type": "t3" },{ "index": 460, "type": "t1" },{ "index": 461, "type": "t4" },{ "index": 462, "type": "t5" },{ "index": 463, "type": "t1" },{ "index": 464, "type": "t4" },{ "index": 465, "type": "t5" },{ "index": 466, "type": "t3" },{ "index": 467, "type": "t2" },{ "index": 468, "type": "t4" },{ "index": 469, "type": "t4" },{ "index": 470, "type": "t2" },{ "index": 471, "type": "t4" },{ "index": 472, "type": "t5" },{ "index": 473, "type": "t2" },{ "index": 474, "type": "t2" },{ "index": 475, "type": "t1" },{ "index": 476, "type": "t1" },{ "index": 477, "type": "t5" },{ "index": 478, "type": "t2" },{ "index": 479, "type": "t3" },{ "index": 480, "type": "t5" },{ "index": 481, "type": "t2" },{ "index": 482, "type": "t5" },{ "index": 483, "type": "t2" },{ "index": 484, "type": "t5" },{ "index": 485, "type": "t2" },{ "index": 486, "type": "t3" },{ "index": 487, "type": "t2" },{ "index": 488, "type": "t4" },{ "index": 489, "type": "t3" },{ "index": 490, "type": "t5" },{ "index": 491, "type": "t4" },{ "index": 492, "type": "t1" },{ "index": 493, "type": "t3" },{ "index": 494, "type": "t4" },{ "index": 495, "type": "t3" },{ "index": 496, "type": "t4" },{ "index": 497, "type": "t1" },{ "index": 498, "type": "t3" },{ "index": 499, "type": "t4" },{ "index": 500, "type": "t5" },{ "index": 501, "type": "t5" },{ "index": 502, "type": "t5" },{ "index": 503, "type": "t5" },{ "index": 504, "type": "t1" },{ "index": 505, "type": "t1" },{ "index": 506, "type": "t3" },{ "index": 507, "type": "t4" },{ "index": 508, "type": "t4" },{ "index": 509, "type": "t2" },{ "index": 510, "type": "t3" },{ "index": 511, "type": "t2" },{ "index": 512, "type": "t1" },{ "index": 513, "type": "t5" },{ "index": 514, "type": "t3" },{ "index": 515, "type": "t1" },{ "index": 516, "type": "t5" },{ "index": 517, "type": "t3" },{ "index": 518, "type": "t3" },{ "index": 519, "type": "t3" },{ "index": 520, "type": "t1" },{ "index": 521, "type": "t4" },{ "index": 522, "type": "t2" },{ "index": 523, "type": "t1" },{ "index": 524, "type": "t3" },{ "index": 525, "type": "t4" },{ "index": 526, "type": "t2" },{ "index": 527, "type": "t5" },{ "index": 528, "type": "t5" },{ "index": 529, "type": "t5" },{ "index": 530, "type": "t1" },{ "index": 531, "type": "t3" },{ "index": 532, "type": "t5" },{ "index": 533, "type": "t5" },{ "index": 534, "type": "t3" },{ "index": 535, "type": "t3" },{ "index": 536, "type": "t1" },{ "index": 537, "type": "t1" },{ "index": 538, "type": "t4" },{ "index": 539, "type": "t5" },{ "index": 540, "type": "t5" },{ "index": 541, "type": "t5" },{ "index": 542, "type": "t4" },{ "index": 543, "type": "t5" },{ "index": 544, "type": "t3" },{ "index": 545, "type": "t4" },{ "index": 546, "type": "t2" },{ "index": 547, "type": "t1" },{ "index": 548, "type": "t2" },{ "index": 549, "type": "t5" },{ "index": 550, "type": "t1" },{ "index": 551, "type": "t1" },{ "index": 552, "type": "t1" },{ "index": 553, "type": "t2" },{ "index": 554, "type": "t4" },{ "index": 555, "type": "t3" },{ "index": 556, "type": "t4" },{ "index": 557, "type": "t1" },{ "index": 558, "type": "t5" },{ "index": 559, "type": "t4" },{ "index": 560, "type": "t1" },{ "index": 561, "type": "t5" },{ "index": 562, "type": "t5" },{ "index": 563, "type": "t4" },{ "index": 564, "type": "t4" },{ "index": 565, "type": "t5" },{ "index": 566, "type": "t2" },{ "index": 567, "type": "t5" },{ "index": 568, "type": "t3" },{ "index": 569, "type": "t3" },{ "index": 570, "type": "t3" },{ "index": 571, "type": "t3" },{ "index": 572, "type": "t3" },{ "index": 573, "type": "t3" },{ "index": 574, "type": "t2" },{ "index": 575, "type": "t4" },{ "index": 576, "type": "t1" },{ "index": 577, "type": "t5" },{ "index": 578, "type": "t3" },{ "index": 579, "type": "t4" },{ "index": 580, "type": "t4" },{ "index": 581, "type": "t4" },{ "index": 582, "type": "t3" },{ "index": 583, "type": "t4" },{ "index": 584, "type": "t3" },{ "index": 585, "type": "t2" },{ "index": 586, "type": "t1" },{ "index": 587, "type": "t3" },{ "index": 588, "type": "t1" },{ "index": 589, "type": "t4" },{ "index": 590, "type": "t1" },{ "index": 591, "type": "t4" },{ "index": 592, "type": "t4" },{ "index": 593, "type": "t5" },{ "index": 594, "type": "t1" },{ "index": 595, "type": "t2" },{ "index": 596, "type": "t5" },{ "index": 597, "type": "t5" },{ "index": 598, "type": "t3" },{ "index": 599, "type": "t4" },{ "index": 600, "type": "t2" },{ "index": 601, "type": "t3" },{ "index": 602, "type": "t5" },{ "index": 603, "type": "t3" },{ "index": 604, "type": "t1" },{ "index": 605, "type": "t3" },{ "index": 606, "type": "t5" },{ "index": 607, "type": "t2" },{ "index": 608, "type": "t5" },{ "index": 609, "type": "t3" },{ "index": 610, "type": "t4" },{ "index": 611, "type": "t1" },{ "index": 612, "type": "t3" },{ "index": 613, "type": "t5" },{ "index": 614, "type": "t3" },{ "index": 615, "type": "t1" },{ "index": 616, "type": "t3" },{ "index": 617, "type": "t3" },{ "index": 618, "type": "t5" },{ "index": 619, "type": "t3" },{ "index": 620, "type": "t3" },{ "index": 621, "type": "t1" },{ "index": 622, "type": "t1" },{ "index": 623, "type": "t3" },{ "index": 624, "type": "t1" },{ "index": 625, "type": "t1" },{ "index": 626, "type": "t3" },{ "index": 627, "type": "t1" },{ "index": 628, "type": "t1" },{ "index": 629, "type": "t4" },{ "index": 630, "type": "t4" },{ "index": 631, "type": "t3" },{ "index": 632, "type": "t4" },{ "index": 633, "type": "t4" },{ "index": 634, "type": "t1" },{ "index": 635, "type": "t1" },{ "index": 636, "type": "t2" },{ "index": 637, "type": "t1" },{ "index": 638, "type": "t4" },{ "index": 639, "type": "t2" },{ "index": 640, "type": "t2" },{ "index": 641, "type": "t3" },{ "index": 642, "type": "t2" },{ "index": 643, "type": "t5" },{ "index": 644, "type": "t5" },{ "index": 645, "type": "t3" },{ "index": 646, "type": "t4" },{ "index": 647, "type": "t3" },{ "index": 648, "type": "t4" },{ "index": 649, "type": "t5" },{ "index": 650, "type": "t2" },{ "index": 651, "type": "t4" },{ "index": 652, "type": "t3" },{ "index": 653, "type": "t5" },{ "index": 654, "type": "t4" },{ "index": 655, "type": "t5" },{ "index": 656, "type": "t1" },{ "index": 657, "type": "t4" },{ "index": 658, "type": "t3" },{ "index": 659, "type": "t5" },{ "index": 660, "type": "t1" },{ "index": 661, "type": "t1" },{ "index": 662, "type": "t4" },{ "index": 663, "type": "t4" },{ "index": 664, "type": "t3" },{ "index": 665, "type": "t4" },{ "index": 666, "type": "t2" },{ "index": 667, "type": "t1" },{ "index": 668, "type": "t5" },{ "index": 669, "type": "t1" },{ "index": 670, "type": "t2" },{ "index": 671, "type": "t4" },{ "index": 672, "type": "t4" },{ "index": 673, "type": "t3" },{ "index": 674, "type": "t4" },{ "index": 675, "type": "t2" },{ "index": 676, "type": "t1" },{ "index": 677, "type": "t4" },{ "index": 678, "type": "t5" },{ "index": 679, "type": "t1" },{ "index": 680, "type": "t4" },{ "index": 681, "type": "t2" },{ "index": 682, "type": "t1" },{ "index": 683, "type": "t5" },{ "index": 684, "type": "t3" },{ "index": 685, "type": "t3" },{ "index": 686, "type": "t5" },{ "index": 687, "type": "t5" },{ "index": 688, "type": "t5" },{ "index": 689, "type": "t5" },{ "index": 690, "type": "t1" },{ "index": 691, "type": "t4" },{ "index": 692, "type": "t1" },{ "index": 693, "type": "t5" },{ "index": 694, "type": "t3" },{ "index": 695, "type": "t3" },{ "index": 696, "type": "t4" },{ "index": 697, "type": "t1" },{ "index": 698, "type": "t1" },{ "index": 699, "type": "t3" },{ "index": 700, "type": "t1" },{ "index": 701, "type": "t5" },{ "index": 702, "type": "t4" },{ "index": 703, "type": "t4" },{ "index": 704, "type": "t4" },{ "index": 705, "type": "t3" },{ "index": 706, "type": "t3" },{ "index": 707, "type": "t1" },{ "index": 708, "type": "t2" },{ "index": 709, "type": "t3" },{ "index": 710, "type": "t3" },{ "index": 711, "type": "t3" },{ "index": 712, "type": "t4" },{ "index": 713, "type": "t2" },{ "index": 714, "type": "t4" },{ "index": 715, "type": "t3" },{ "index": 716, "type": "t5" },{ "index": 717, "type": "t1" },{ "index": 718, "type": "t5" },{ "index": 719, "type": "t4" },{ "index": 720, "type": "t4" },{ "index": 721, "type": "t2" },{ "index": 722, "type": "t3" },{ "index": 723, "type": "t3" },{ "index": 724, "type": "t2" },{ "index": 725, "type": "t1" },{ "index": 726, "type": "t1" },{ "index": 727, "type": "t2" },{ "index": 728, "type": "t3" },{ "index": 729, "type": "t3" },{ "index": 730, "type": "t4" },{ "index": 731, "type": "t4" },{ "index": 732, "type": "t4" },{ "index": 733, "type": "t3" },{ "index": 734, "type": "t1" },{ "index": 735, "type": "t4" },{ "index": 736, "type": "t3" },{ "index": 737, "type": "t5" },{ "index": 738, "type": "t3" },{ "index": 739, "type": "t2" },{ "index": 740, "type": "t2" },{ "index": 741, "type": "t5" },{ "index": 742, "type": "t5" },{ "index": 743, "type": "t1" },{ "index": 744, "type": "t1" },{ "index": 745, "type": "t2" },{ "index": 746, "type": "t3" },{ "index": 747, "type": "t3" },{ "index": 748, "type": "t4" },{ "index": 749, "type": "t4" },{ "index": 750, "type": "t5" },{ "index": 751, "type": "t3" },{ "index": 752, "type": "t2" },{ "index": 753, "type": "t4" },{ "index": 754, "type": "t5" },{ "index": 755, "type": "t2" },{ "index": 756, "type": "t4" },{ "index": 757, "type": "t3" },{ "index": 758, "type": "t4" },{ "index": 759, "type": "t2" },{ "index": 760, "type": "t4" },{ "index": 761, "type": "t3" },{ "index": 762, "type": "t2" },{ "index": 763, "type": "t2" },{ "index": 764, "type": "t5" },{ "index": 765, "type": "t4" },{ "index": 766, "type": "t4" },{ "index": 767, "type": "t5" },{ "index": 768, "type": "t4" },{ "index": 769, "type": "t4" },{ "index": 770, "type": "t3" },{ "index": 771, "type": "t4" },{ "index": 772, "type": "t5" },{ "index": 773, "type": "t5" },{ "index": 774, "type": "t2" },{ "index": 775, "type": "t3" },{ "index": 776, "type": "t2" },{ "index": 777, "type": "t5" },{ "index": 778, "type": "t5" },{ "index": 779, "type": "t4" },{ "index": 780, "type": "t3" },{ "index": 781, "type": "t5" },{ "index": 782, "type": "t4" },{ "index": 783, "type": "t3" },{ "index": 784, "type": "t5" },{ "index": 785, "type": "t4" },{ "index": 786, "type": "t4" },{ "index": 787, "type": "t5" },{ "index": 788, "type": "t3" },{ "index": 789, "type": "t3" },{ "index": 790, "type": "t5" },{ "index": 791, "type": "t2" },{ "index": 792, "type": "t2" },{ "index": 793, "type": "t3" },{ "index": 794, "type": "t3" },{ "index": 795, "type": "t2" },{ "index": 796, "type": "t5" },{ "index": 797, "type": "t5" },{ "index": 798, "type": "t4" },{ "index": 799, "type": "t2" },{ "index": 800, "type": "t5" },{ "index": 801, "type": "t3" },{ "index": 802, "type": "t4" },{ "index": 803, "type": "t5" },{ "index": 804, "type": "t4" },{ "index": 805, "type": "t3" },{ "index": 806, "type": "t5" },{ "index": 807, "type": "t3" },{ "index": 808, "type": "t1" },{ "index": 809, "type": "t2" },{ "index": 810, "type": "t4" },{ "index": 811, "type": "t2" },{ "index": 812, "type": "t1" },{ "index": 813, "type": "t4" },{ "index": 814, "type": "t2" },{ "index": 815, "type": "t2" },{ "index": 816, "type": "t2" },{ "index": 817, "type": "t3" },{ "index": 818, "type": "t2" },{ "index": 819, "type": "t1" },{ "index": 820, "type": "t4" },{ "index": 821, "type": "t3" },{ "index": 822, "type": "t5" },{ "index": 823, "type": "t2" },{ "index": 824, "type": "t3" },{ "index": 825, "type": "t3" },{ "index": 826, "type": "t3" },{ "index": 827, "type": "t2" },{ "index": 828, "type": "t1" },{ "index": 829, "type": "t5" },{ "index": 830, "type": "t2" },{ "index": 831, "type": "t5" },{ "index": 832, "type": "t4" },{ "index": 833, "type": "t3" },{ "index": 834, "type": "t5" },{ "index": 835, "type": "t4" },{ "index": 836, "type": "t5" },{ "index": 837, "type": "t1" },{ "index": 838, "type": "t1" },{ "index": 839, "type": "t5" },{ "index": 840, "type": "t3" },{ "index": 841, "type": "t4" },{ "index": 842, "type": "t4" },{ "index": 843, "type": "t4" },{ "index": 844, "type": "t4" },{ "index": 845, "type": "t4" },{ "index": 846, "type": "t4" },{ "index": 847, "type": "t3" },{ "index": 848, "type": "t3" },{ "index": 849, "type": "t2" },{ "index": 850, "type": "t5" },{ "index": 851, "type": "t3" },{ "index": 852, "type": "t2" },{ "index": 853, "type": "t5" },{ "index": 854, "type": "t2" },{ "index": 855, "type": "t1" },{ "index": 856, "type": "t4" },{ "index": 857, "type": "t5" },{ "index": 858, "type": "t5" },{ "index": 859, "type": "t4" },{ "index": 860, "type": "t1" },{ "index": 861, "type": "t5" },{ "index": 862, "type": "t4" },{ "index": 863, "type": "t1" },{ "index": 864, "type": "t4" },{ "index": 865, "type": "t2" },{ "index": 866, "type": "t1" },{ "index": 867, "type": "t1" },{ "index": 868, "type": "t4" },{ "index": 869, "type": "t1" },{ "index": 870, "type": "t2" },{ "index": 871, "type": "t3" },{ "index": 872, "type": "t2" },{ "index": 873, "type": "t2" },{ "index": 874, "type": "t2" },{ "index": 875, "type": "t5" },{ "index": 876, "type": "t2" },{ "index": 877, "type": "t3" },{ "index": 878, "type": "t4" },{ "index": 879, "type": "t3" },{ "index": 880, "type": "t5" },{ "index": 881, "type": "t4" },{ "index": 882, "type": "t4" },{ "index": 883, "type": "t1" },{ "index": 884, "type": "t1" },{ "index": 885, "type": "t1" },{ "index": 886, "type": "t4" },{ "index": 887, "type": "t2" },{ "index": 888, "type": "t5" },{ "index": 889, "type": "t2" },{ "index": 890, "type": "t1" },{ "index": 891, "type": "t3" },{ "index": 892, "type": "t4" },{ "index": 893, "type": "t1" },{ "index": 894, "type": "t2" },{ "index": 895, "type": "t5" },{ "index": 896, "type": "t3" },{ "index": 897, "type": "t4" },{ "index": 898, "type": "t2" },{ "index": 899, "type": "t3" },{ "index": 900, "type": "t5" },{ "index": 901, "type": "t3" },{ "index": 902, "type": "t4" },{ "index": 903, "type": "t1" },{ "index": 904, "type": "t4" },{ "index": 905, "type": "t3" },{ "index": 906, "type": "t1" },{ "index": 907, "type": "t4" },{ "index": 908, "type": "t5" },{ "index": 909, "type": "t3" },{ "index": 910, "type": "t3" },{ "index": 911, "type": "t2" },{ "index": 912, "type": "t3" },{ "index": 913, "type": "t5" },{ "index": 914, "type": "t3" },{ "index": 915, "type": "t5" },{ "index": 916, "type": "t3" },{ "index": 917, "type": "t1" },{ "index": 918, "type": "t4" },{ "index": 919, "type": "t5" },{ "index": 920, "type": "t5" },{ "index": 921, "type": "t2" },{ "index": 922, "type": "t2" },{ "index": 923, "type": "t5" },{ "index": 924, "type": "t5" },{ "index": 925, "type": "t1" },{ "index": 926, "type": "t2" },{ "index": 927, "type": "t4" },{ "index": 928, "type": "t2" },{ "index": 929, "type": "t2" },{ "index": 930, "type": "t4" },{ "index": 931, "type": "t5" },{ "index": 932, "type": "t2" },{ "index": 933, "type": "t1" },{ "index": 934, "type": "t1" },{ "index": 935, "type": "t3" },{ "index": 936, "type": "t5" },{ "index": 937, "type": "t2" },{ "index": 938, "type": "t3" },{ "index": 939, "type": "t3" },{ "index": 940, "type": "t2" },{ "index": 941, "type": "t3" },{ "index": 942, "type": "t1" },{ "index": 943, "type": "t4" },{ "index": 944, "type": "t5" },{ "index": 945, "type": "t4" },{ "index": 946, "type": "t2" },{ "index": 947, "type": "t2" },{ "index": 948, "type": "t3" },{ "index": 949, "type": "t4" },{ "index": 950, "type": "t4" },{ "index": 951, "type": "t5" },{ "index": 952, "type": "t1" },{ "index": 953, "type": "t5" },{ "index": 954, "type": "t5" },{ "index": 955, "type": "t1" },{ "index": 956, "type": "t2" },{ "index": 957, "type": "t2" },{ "index": 958, "type": "t1" },{ "index": 959, "type": "t5" },{ "index": 960, "type": "t4" },{ "index": 961, "type": "t2" },{ "index": 962, "type": "t4" },{ "index": 963, "type": "t2" },{ "index": 964, "type": "t5" },{ "index": 965, "type": "t1" },{ "index": 966, "type": "t2" },{ "index": 967, "type": "t2" },{ "index": 968, "type": "t4" },{ "index": 969, "type": "t3" },{ "index": 970, "type": "t2" },{ "index": 971, "type": "t2" },{ "index": 972, "type": "t3" },{ "index": 973, "type": "t1" },{ "index": 974, "type": "t1" },{ "index": 975, "type": "t3" },{ "index": 976, "type": "t3" },{ "index": 977, "type": "t4" },{ "index": 978, "type": "t5" },{ "index": 979, "type": "t2" },{ "index": 980, "type": "t3" },{ "index": 981, "type": "t5" },{ "index": 982, "type": "t3" },{ "index": 983, "type": "t2" },{ "index": 984, "type": "t5" },{ "index": 985, "type": "t1" },{ "index": 986, "type": "t2" },{ "index": 987, "type": "t5" },{ "index": 988, "type": "t4" },{ "index": 989, "type": "t5" },{ "index": 990, "type": "t1" },{ "index": 991, "type": "t1" },{ "index": 992, "type": "t4" },{ "index": 993, "type": "t3" },{ "index": 994, "type": "t2" },{ "index": 995, "type": "t4" },{ "index": 996, "type": "t1" },{ "index": 997, "type": "t4" },{ "index": 998, "type": "t3" },{ "index": 999, "type": "t2" },{ "index": 1000, "type": "t4" }], "itemTypeName": { "t1": "Ursa", "t2": "Bow_e", "t3": "Georgie", "t4": "Rafiki", "t5": "Winter Tree" }, "itemFileName": { "t1": "img/Ursa.jpg", "t2": "img/Bow_e.jpg", "t3": "img/Georgie.jpg", "t4": "img/Rafiki.jpg", "t5": "img/WinterTree.jpg" },"playerStatus": [] }';
}

function onLoad() {
	gameStatus = JSON.parse(getInitialStatus());
	document.getElementById("button_createHumanPlayer").disabled = false;
	document.getElementById("initial_player_name").disabled = false;
	document.getElementById("player_console").innerHTML = "";
	document.getElementById("mainWindow").style.visibility = "hidden";
	document.getElementById("instructions").style.display = "block";
	document.getElementById("winningScore").value = 2;
	document.getElementById("winningScore").disabled = false;
	document.getElementById("popup").style.display = "none";
	document.getElementById("popup").innerHTML = "";
	document.getElementById("initial_player_name").focus();
	// document.getElementById("button_createBotPlayer").disabled = false;
	document.getElementById("button_startAuction").disabled = true;
	setupCleanTableRows();
}

function setupCleanTableRows() {
	var colIndex, rowIndex;

	// ----------Item List-----------
	var itemListTable = document.getElementById("itemsTable");

	// remove any elements
	for (rowIndex = itemListTable.rows.length - 1; rowIndex > 0; rowIndex--) {
		itemListTable.deleteRow(rowIndex);
	}

	// add blank rows
	var items = gameStatus.items;
	for (rowIndex = 1; rowIndex <= items.length; rowIndex++) {
		var row = itemListTable.insertRow(rowIndex);
		for (colIndex = 0; colIndex < itemListTable.rows[0].cells.length; colIndex++) {
			row.insertCell(colIndex);
		}
	}

	// ----------Player Status-----------
	var playerStatusTable = document.getElementById("playerTable");
	// remove old data
	playerStatusTable.innerHTML = "";
	// add first Row
	var firstRow = playerStatusTable.createTHead().insertRow(0);
	firstRow.insertCell(0).innerHTML = "Player Name";
	firstRow.insertCell(1).innerHTML = "Amount Left";
	var itemTypes = Object.keys(gameStatus.itemFileName);
	for (colIndex = 2; colIndex < itemTypes.length + 2; colIndex++) {
		var newCell = firstRow.insertCell(colIndex);
		var image = document.createElement("img")
		image.src = gameStatus["itemFileName"][itemTypes[colIndex - 2]];
		image.class = "image";

		image.width = 50;
		newCell.appendChild(image);
		newCell.id = itemTypes[colIndex - 2];
	}
	playerStatusTable.appendChild(firstRow);
}

function generateGuid() {
	return (Math.random() * 10000000000000000).toString();
}

function handlePlayerNameKeyPress(event) {
	if (event.keyCode == 13) {
		createHumanPlayer();
		if (event.ctrlKey) {
			startAuction();
		}
	}
}

function createHumanPlayer() {
	var inputField = document.getElementById("initial_player_name");
	var playerName = inputField.value;
	if (playerName === "") {
		return;
	}
	// todo check for duplicate name
	inputField.value = "";

	var guid = generateGuid();

	var row = document.getElementById("player_console").insertRow(-1);

	row.insertCell(0).innerHTML = playerName;

	var textBoxForPlayer = document.createElement("input");
	textBoxForPlayer.setAttribute("type", "password");
	textBoxForPlayer.id = "bid_" + guid;
	textBoxForPlayer.placeholder = "Enter bid amount";
	textBoxForPlayer.disabled = true;
	textBoxForPlayer.onkeypress = function() {
		if (event.keyCode == 13) {
			registerBid(guid);
		}
	}
	row.insertCell(1).appendChild(textBoxForPlayer);

	var buttonForPlayer = document.createElement("input");
	buttonForPlayer.setAttribute("type", "button");
	buttonForPlayer.id = "button_" + guid;
	buttonForPlayer.value = "Bid";
	buttonForPlayer.disabled = true;
	buttonForPlayer.onclick = function() {
		registerBid(guid);
	};
	row.insertCell(2).appendChild(buttonForPlayer);

	/*
	 * var newPlayer = Player(playerName, guid);
	 * status["playerStatus"].push(newPlayer);
	 */
	var newPlayer = {
		"guid" : guid,
		"name" : playerName,
		"amountLeft" : 100,
		"itemsAcquired" : {}
	};
	gameStatus.playerStatus.push(newPlayer);

	// enable startAuction when 2 players created
	if (gameStatus["playerStatus"].length === 2) {
		document.getElementById("button_startAuction").disabled = false;
	}

	// put player's entry in playerStatus
	var playerStatusTable = document.getElementById("playerTable");
	var newRow = playerStatusTable.insertRow(-1);
	newRow.id = "playerStatus_" + newPlayer.guid;
	newRow.insertCell(0).innerHTML = newPlayer.name;
	newRow.insertCell(1).innerHTML = newPlayer.amountLeft;
	var index;
	for (index = 2; index < playerStatusTable.rows[0].cells.length; index++) {
		newRow.insertCell(index).innerHTML = 0;
	}
}

function startAuction() {
	winningScore = parseInt(document.getElementById("winningScore").value);
	document.getElementById("winningScore").disabled = true;
	document.getElementById("button_createHumanPlayer").disabled = true;
	// document.getElementById("button_createBotPlayer").disabled = true;
	document.getElementById("button_startAuction").disabled = true;
	document.getElementById("initial_player_name").disabled = true;
	document.getElementById("instructions").style.display = "none";

	var firstUnbidItem = updateItemListAndReturnFirstUnbidItem();
	updateItemToBeBid(firstUnbidItem);
	enableBidButtons();
	document.getElementById("mainWindow").style.visibility = "visible";
}

function enableBidButtons() {
	for ( var index in gameStatus.playerStatus) {
		document
				.getElementById("button_" + gameStatus.playerStatus[index].guid).disabled = false;
		document.getElementById("bid_" + gameStatus.playerStatus[index].guid).disabled = false;
	}
	document.getElementById("player_console").rows[0].cells[1].children[0]
			.focus();
}

function registerBid(guid) {
	var inputField = document.getElementById("bid_" + guid);
	var bidAmount = parseFloat(inputField.value);
	inputField.value = "";

	if (isNaN(bidAmount)) {
		showPopup("Not a number!", 1000);
		return;
	}

	if (bidAmount < 0) {
		showPopup("No negative Bids", 1000);
		return;
	}

	var player = getPlayerFromGuid(guid);

	if (player.amountLeft < bidAmount) {
		showPopup("You don't have that much money!", 1000);
		return;
	}

	bidsForCurrentRound[guid] = bidAmount;

	document.getElementById("button_" + player.guid).disabled = true;
	document.getElementById("bid_" + player.guid).disabled = true;

	for (var rowIndex = 0; rowIndex < document.getElementById("player_console").rows.length; rowIndex++) {
		var inputBox = document.getElementById("player_console").rows[rowIndex].cells[1].children[0];
		if (inputBox.disabled === false) {
			inputBox.focus();
			break;
		}
	}

	if (Object.keys(bidsForCurrentRound).length === gameStatus.playerStatus.length) {
		var roundWinner = getWinnerForThisRound();

		var currentBidItem = getItemBeingBidCurrently();
		currentBidItem.winner = roundWinner.name;
		currentBidItem.winningAmount = bidsForCurrentRound[roundWinner.guid];

		roundWinner.amountLeft -= bidsForCurrentRound[roundWinner.guid];
		if (currentBidItem.type in roundWinner.itemsAcquired) {
			roundWinner.itemsAcquired[currentBidItem.type] += 1;
		} else {
			roundWinner.itemsAcquired[currentBidItem.type] = 1;
		}
		updatePlayerStatus();

		bidsForCurrentRound = {};

		var gameWinner = getGameWinner();
		var newItemToBeBid = updateItemListAndReturnFirstUnbidItem();
		if (gameWinner != null) {
			showGameEnd(gameWinner);
		} else if (gameWinner == null && newItemToBeBid == null) {
			showGameOver();
		} else {
			var message = roundWinner.name + " has won this round!";
			showPopup(message, 1000);
			updateItemToBeBid(newItemToBeBid);
			enableBidButtons();
		}
	}
}

function showGameOver() {
	showPopup("Game Over, Nobody won! :/", -1);
	var reset = document.createElement("input");
	reset.type = "button";
	reset.value = "Reset";
	reset.onclick = function() {
		onLoad();
	};
	document.getElementById("popup").appendChild(reset);
}

function showGameEnd(gameWinner) {
	showPopup(gameWinner.name + " has won the game!!", -1);
	var saveScore = document.createElement("input");
	saveScore.type = "button";
	saveScore.value = "Save Score";
	saveScore.onclick = function() {
		saveScore(gameWinner.name, 10);
	};
	saveScore.align = "center";
	document.getElementById("popup").appendChild(saveScore);

	var reset = document.createElement("input");
	reset.type = "button";
	reset.value = "Reset";
	reset.align = "center";
	reset.onclick = function() {
		onLoad();
	};
	document.getElementById("popup").appendChild(reset);
}

function saveScore(winnerName, score) {
	window.alert("save score called with " + winnerName + score);
}

function getGameWinner() {
	for ( var playerIndex in gameStatus.playerStatus) {
		var player = gameStatus.playerStatus[playerIndex];
		for ( var itemType in player.itemsAcquired) {
			if (player.itemsAcquired[itemType] === winningScore) {
				return player;
			}
		}
	}
	return null;
}

function getItemBeingBidCurrently() {
	for ( var index in gameStatus.items) {
		var item = gameStatus.items[index];
		if (!("winner" in item)) {
			return item;
		}
	}
}

function showPopup(message, timeout) {
	var popup = document.getElementById("popup");
	popup.style.display = "block";
	popup.innerHTML = "<h3 align='center'>" + message + "</h3>";
	if (timeout > 0) {
		setTimeout(function() {
			popup.style.display = "none";
			popup.innerHTML = "";
		}, timeout);
	}
}

function getWinnerForThisRound() {
	// find out winning player's guid
	var winningGuid;
	var winningAmount = -1;
	for ( var guid in bidsForCurrentRound) {
		if (bidsForCurrentRound[guid] > winningAmount) {
			winningAmount = bidsForCurrentRound[guid];
			winningGuid = guid;
		}
	}
	// return winning player
	for ( var index in gameStatus.playerStatus) {
		if (winningGuid === gameStatus.playerStatus[index].guid) {
			return gameStatus.playerStatus[index];
		}
	}
}

function getPlayerFromGuid(guid) {
	for ( var index in gameStatus.playerStatus) {
		if (gameStatus.playerStatus[index].guid === guid) {
			return gameStatus.playerStatus[index];
		}
	}
}

function getStatusJson() {
	return '';
}

function updateItemListAndReturnFirstUnbidItem() {
	var itemListTable = document.getElementById("itemsTable");
	var index;
	var firstUnbidItem;

	for (index = 0; index < gameStatus.items.length; index++) {
		var row = itemListTable.rows[index + 1];
		row.cells[0].innerHTML = gameStatus.items[index].index;

		var itemType = gameStatus.items[index].type;
		row.cells[1].innerHTML = gameStatus.itemTypeName[itemType];

		if ("winner" in gameStatus.items[index]) {
			row.cells[2].innerHTML = gameStatus.items[index].winner;
			row.cells[3].innerHTML = gameStatus.items[index].winningAmount;
		} else if (firstUnbidItem == null) {
			firstUnbidItem = gameStatus.items[index];
		}
	}

	return firstUnbidItem;
}

function updateItemToBeBid(firstUnbidItem) {
	var itemType;
	if (firstUnbidItem == null) {
		img.src("empty.png");
	} else {
		itemType = firstUnbidItem.type;
		img = document.getElementById("bidImage");
		img.src = gameStatus.itemFileName[itemType];
	}
}

function updatePlayerStatus() {
	var itemTypes = Object.keys(gameStatus.itemTypeName);
	playerTable = document.getElementById("playerTable")
	// add player status
	for (var rowIndex = 1; rowIndex < playerTable.rows.length; rowIndex++) {
		var row = playerTable.rows[rowIndex];
		var rowGuid = row.id.split("_")[1];

		var player = getPlayerFromGuid(rowGuid);

		row.cells[0].innerHTML = player.name;
		row.cells[1].innerHTML = player.amountLeft;

		var columnIndex;
		for (columnIndex = 2; columnIndex < itemTypes.length + 2; columnIndex++) {
			itemTypeOfColumn = playerTable.rows[0].cells[columnIndex].id;

			if (itemTypeOfColumn in player.itemsAcquired) {
				row.cells[columnIndex].innerHTML = player.itemsAcquired[itemTypeOfColumn];
			} else {
				row.cells[columnIndex].innerHTML = 0;
			}
		}
	}
}