/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Slider } from "../components/slider/Slider";
import Carousel from '../components/carousel'
import GridFeatured from '../components/grid'
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import {useFeaturedCategories} from '../utils/hooks/useFeaturedCategories'
import {useFeaturedGrid} from '../utils/hooks/useFeaturedGrid'

jest.mock('../utils/hooks/useFeaturedBanners.js')
jest.mock('../utils/hooks/useFeaturedCategories')
jest.mock('../utils/hooks/useFeaturedGrid')

describe('Test on <Home/>', () =>{

        test('Featured Banners Slider is fetching...', () => {

            const banners = {
                "results": [
                    {
                        "id": "YWYpQRIAACkA3RZr",
                        "uid": null,
                        "url": null,
                        "type": "banner",
                        "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWYpQRIAACkA3RZr%22%29+%5D%5D",
                        "tags": [],
                        "first_publication_date": "2021-10-13T00:33:08+0000",
                        "last_publication_date": "2021-10-13T00:33:08+0000",
                        "slugs": ["amazing-finishes---bedroom", "acabados-increibles---recamara"],
                        "linked_documents": [],
                        "lang": "en-us",
                        "alternate_languages": [
                            {
                                "id": "YWYpFRIAAC8A3RWi",
                                "type": "banner",
                                "lang": "es-mx"
                            }
                        ],
                        "data": {
                            "title": "AMAZING FINISHES - BEDROOM",
                            "description": [
                                {
                                    "type": "paragraph",
                                    "text": "Provides great stability",
                                    "spans": []
                                }
                            ],
                            "cta_link": "#",
                            "cta_target": "_parent",
                            "main_image": {
                                "dimensions": {
                                    "width": 1440,
                                    "height": 705
                                },
                                "alt": "AMAZING FINISHES - BEDROOM",
                                "copyright": null,
                                "url": "https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg?auto=compress,format&rect=0,0,1429,700&w=1440&h=705"
                            }
                        }
                    }
                ]
            }
            
            useFeaturedBanners.mockReturnValue({
                data: banners,
                isLoading: false

            })
            render(	<Slider
				controles={true}
				autoplay={false}
				velocidad='3000'
				intervalo='5000'
			/>)
            expect(screen.getAllByRole('img').length).toBe(1)

        })


        test('Categories Carousel/Grid is fetching...', () => {

            const categories = {
                "results": [
                    {
                        "id": "YWHx-xIAAC0Ayj7i",
                        "uid": null,
                        "url": null,
                        "type": "category",
                        "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHx-xIAAC0Ayj7i%22%29+%5D%5D",
                        "tags": [],
                        "first_publication_date": "2021-10-09T23:33:05+0000",
                        "last_publication_date": "2021-10-12T23:45:23+0000",
                        "slugs": ["bed--bath"],
                        "linked_documents": [],
                        "lang": "en-us",
                        "alternate_languages": [
                            {
                                "id": "YWHx7xIAACsAyj6p",
                                "type": "category",
                                "lang": "es-mx"
                            }
                        ],
                        "data": {
                            "name": "Bed & Bath",
                            "main_image": {
                                "dimensions": {
                                    "width": 621,
                                    "height": 398
                                },
                                "alt": "Bath",
                                "copyright": null,
                                "url": "https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398"
                            }
                        }
                    }
                ]
            }

            useFeaturedCategories.mockReturnValue({
                data: categories,
                isLoading: false

            })

            render(<Carousel/>, {wrapper: BrowserRouter})
            expect(screen.getAllByRole('img').length).toBe(1)


        })

        test('Featured Products Grid is fetching...', () => {

            const grid = {	"results": [
                {
                    "id": "YWL8XBIAAC0AzuPZ",
                    "uid": null,
                    "url": null,
                    "type": "product",
                    "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWL8XBIAAC0AzuPZ%22%29+%5D%5D",
                    "tags": ["Living Room", "Sofa"],
                    "first_publication_date": "2021-10-10T14:44:47+0000",
                    "last_publication_date": "2021-10-10T14:44:47+0000",
                    "slugs": ["tallulah-sofa-gray", "sofa-tallulah-gris"],
                    "linked_documents": [],
                    "lang": "en-us",
                    "alternate_languages": [
                        {
                            "id": "YWL7yBIAAC8AzuFJ",
                            "type": "product",
                            "lang": "es-mx"
                        }
                    ],
                    "data": {
                        "name": "Tallulah Sofa Gray",
                        "sku": "1080681271",
                        "category": {
                            "id": "YWHviRIAACsAyjP3",
                            "type": "category",
                            "tags": [],
                            "slug": "furniture",
                            "lang": "en-us",
                            "first_publication_date": "2021-10-09T23:34:39+0000",
                            "last_publication_date": "2021-10-12T23:30:58+0000",
                            "link_type": "Document",
                            "isBroken": false
                        },
                        "mainimage": {
                            "dimensions": {
                                "width": 696,
                                "height": 900
                            },
                            "alt": "Tallulah Sofa Gray",
                            "copyright": null,
                            "url": "https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format"
                        },
                        "short_description": "A low profile sets the stage for nighttime relaxation. The Tallulah upholstered sofa combines the straight lines of the European style with romantic details such as side cushions, crooked legs and nail heads. Square arm.",
                        "description": [
                            {
                                "type": "paragraph",
                                "text": "A low profile sets the stage for nighttime relaxation. The Tallulah upholstered sofa combines the straight lines of the European style with romantic details such as side cushions, crooked legs and nail heads. Square arm. Solid engineered solid wood frame. Down-filled cushions for a softer feel. Sinuous, non-sag steel springs provide shock absorbing support. The locked corner frame and mortise and tenon joinery provide exceptional structural integrity. The loose cushions are removable. Features antique brass nail head details. The removable legs have a vintage brown finish. Adjustable levelers provide stability on uneven floors.",
                                "spans": []
                            }
                        ],
                        "specs": [
                            {
                                "spec_name": "Product Height",
                                "spec_value": "88.90 cm"
                            },
                            {
                                "spec_name": "Product width",
                                "spec_value": "187 cm"
                            },
                            {
                                "spec_name": "Product depth",
                                "spec_value": "101 cm"
                            },
                            {
                                "spec_name": "Product Weight",
                                "spec_value": "56.69 kg"
                            },
                            {
                                "spec_name": "Material",
                                "spec_value": "Cloth"
                            },
                            {
                                "spec_name": "Care and Cleaning Instructions",
                                "spec_value": "Rotate the cushions and vacuum under them regularly. To avoid discoloration"
                            }
                        ],
                        "images": [
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 696,
                                        "height": 900
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format"
                                }
                            },
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 696,
                                        "height": 900
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/3b54d7d6-5033-4aad-a8f0-eb84032659c0_2.jpeg?auto=compress,format"
                                }
                            },
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 696,
                                        "height": 900
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/58dbb943-d02c-4c9b-aed1-c17d47c5476c_3.jpeg?auto=compress,format"
                                }
                            },
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 696,
                                        "height": 900
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/910fb56b-e21b-44f9-9f87-3bd2cea8262e_4.webp?auto=compress,format"
                                }
                            },
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 696,
                                        "height": 900
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/2d6cb851-6f38-46c9-870a-c5f374a927ca_5.webp?auto=compress,format"
                                }
                            },
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 696,
                                        "height": 900
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/9ff1a54a-986b-49fc-a5c4-78d6aca246db_6.webp?auto=compress,format"
                                }
                            },
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 940,
                                        "height": 1215
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/f7551c24-90b0-4fcc-8d45-86157eafa799_7.webp?auto=compress,format"
                                }
                            },
                            {
                                "image": {
                                    "dimensions": {
                                        "width": 696,
                                        "height": 900
                                    },
                                    "alt": null,
                                    "copyright": null,
                                    "url": "https://images.prismic.io/wizeline-academy/8332d09a-6fa3-4786-a2a8-2b99c9b45df9_8.webp?auto=compress,format"
                                }
                            }
                        ],
                        "stock": 4,
                        "price": 1834.57
                    }
                }
            ]


            }

            useFeaturedGrid.mockReturnValue({
                data: grid,
                isLoading: false

            })

            render(<GridFeatured/>, {wrapper: BrowserRouter})
            expect(screen.getAllByRole('img').length).toBe(1)

        })


})



