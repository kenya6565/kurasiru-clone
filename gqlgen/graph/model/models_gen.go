// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

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
	ID           *string      `json:"id"`
	Title        *string      `json:"title"`
	SubTitle     *string      `json:"subTitle"`
	Introduction *string      `json:"introduction"`
	CookingTime  *string      `json:"cookingTime"`
	Expense      *string      `json:"expense"`
	Ingredients  *Ingredients `json:"ingredients"`
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
