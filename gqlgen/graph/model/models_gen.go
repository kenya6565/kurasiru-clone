// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type BreadcrumbItem struct {
	Name *string `json:"name"`
	Href *string `json:"href"`
}

type Ingredient struct {
	Item   *string `json:"item"`
	Amount *string `json:"amount"`
}

type Ingredients struct {
	Servings *string       `json:"servings"`
	List     []*Ingredient `json:"list"`
}

type NewTodo struct {
	Text   string `json:"text"`
	UserID string `json:"userId"`
}

type Recipe struct {
	ID           *string           `json:"id"`
	Title        *string           `json:"title"`
	SubTitle     *string           `json:"subTitle"`
	Introduction *string           `json:"introduction"`
	CookingTime  *string           `json:"cookingTime"`
	Expense      *string           `json:"expense"`
	Ingredients  *Ingredients      `json:"ingredients"`
	Breadcrumbs  []*BreadcrumbItem `json:"breadcrumbs"`
	Video        *Video            `json:"video"`
}

type Todo struct {
	ID   string `json:"id"`
	Text string `json:"text"`
	Done bool   `json:"done"`
	User *User  `json:"user"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Video struct {
	ThumbnailURL *string `json:"thumbnailUrl"`
	Source       *string `json:"source"`
	Type         *string `json:"type"`
}
