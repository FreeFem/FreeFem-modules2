testArray = []
tags = []

addToTags = (item) => {
  const items = item.split(', ')

  items.forEach(item => {
    const index = testArray.indexOf(item)
    if (index > -1)
    	return

    // addCategory(item)
	testArray.push(item)
    tags.push({
		value: item,
		label: item.charAt(0).toUpperCase() + item.substring(1),
		selected: false,
		disabled: false
	})
  })
}

// addCategory = (item) => {
//   const select = document.getElementById('choices-multiple-remove-button')
//
//   const option = document.createElement('option')
//   option.value = item
//   option.id = item
//
//   const label = document.createElement('label')
//   label.className = 'custom-control-label'
//   label.htmlFor = item
//   label.innerHTML = item
//
//   const input = document.createElement('input')
//   input.className = 'custom-control-input'
//   input.type = 'checkbox'
//   input.checked = true
//   input.id = item
//   input.onchange = function() { onCategoryChange(item, input.checked) }
//
//   div.appendChild(input)
//   div.appendChild(label)
//
//   categoriesDiv.appendChild(div)
// }

onCategoryChange = (category, checked) => {
  if (checked) {
    categories.push(category)
  } else {
    const index = categories.indexOf(category)
    if (index > -1)
      categories.splice(index, 1)
  }

  toggleCategories()
}

toggleCategories = () => {
  for (let i = 0; i < menu.children.length; i++) {
    const module = menu.children[i]
    if (module.children[0].innerHTML.includes("Home")) {
      module.style.display = 'flex'
      continue
    }

    let category = module.children[1].innerHTML
    category = category.toLowerCase()

    let show = false
    for (let j = 0; j < categories.length; j++) {
      if (category.includes(categories[j].toLowerCase()))
        show = true
    }

    if (show)
      module.style.display = 'flex'
    else
      module.style.display = 'none'
  }
}
